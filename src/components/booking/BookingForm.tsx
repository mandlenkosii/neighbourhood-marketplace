import { useMemo, useState } from "react";

interface BookingFormProps {
  itemId: string;
  pricePerDay: number;
}

export default function BookingForm({
  itemId,
  pricePerDay,
}: BookingFormProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [success, setSuccess] = useState(false);

  const total = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const difference =
      end.getTime() - start.getTime();

    const days =
      Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;

    if (days <= 0) return 0;

    return days * pricePerDay;
  }, [startDate, endDate, pricePerDay]);

  function handleBooking() {
    if (!startDate || !endDate) {
      alert("Please select both dates.");
      return;
    }

    if (total <= 0) {
      alert("End date must be after the start date.");
      return;
    }

    console.log({
      itemId,
      startDate,
      endDate,
      total,
    });

    setSuccess(true);

    setStartDate("");
    setEndDate("");
  }

  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">
        Book this Item
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Start Date
          </label>

          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            End Date
          </label>

          <input
            type="date"
            min={startDate || new Date().toISOString().split("T")[0]}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="rounded-xl bg-slate-100 p-4">
          <p>
            <strong>Price per day:</strong> R{pricePerDay}
          </p>

          <p className="mt-2 text-2xl font-bold text-emerald-600">
            Total: R{total}
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Confirm Booking
        </button>

        {success && (
          <div className="rounded-xl border border-green-300 bg-green-100 p-4 text-green-800">
            ✅ Booking confirmed successfully!
          </div>
        )}
      </div>
    </div>
  );
}