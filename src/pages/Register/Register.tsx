import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name,
        email,
      })
    );

    navigate("/");
  }

  return (
    <Layout>
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </Layout>
  );
}