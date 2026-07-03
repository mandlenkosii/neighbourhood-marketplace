import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: "Junior Sikhosana",
        email,
      })
    );

    navigate("/");
  }

  return (
    <Layout>
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
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
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600"
          >
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
}