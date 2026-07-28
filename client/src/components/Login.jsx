import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://task3backendportfolio.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      // Clear Fields
      setEmail("");
      setPassword("");

      // Redirect to Home
      navigate("/");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to backend.");
      }

      console.error(error);
    }
  };

  const inputStyle = {
    backgroundColor: "#ffffff",
    borderColor: "var(--border-color)",
    color: "#000000",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text-secondary)",
          border: "1px solid var(--border-color)",
        }}
      >
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      <div
        className="max-w-md w-full space-y-8 p-8 sm:p-10 rounded-2xl"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            Welcome Back
          </h2>

          <p
            className="mt-2 text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text-color)" }}
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium"
                style={{ color: "var(--text-color)" }}
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs font-medium hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 mt-2"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "#ffffff",
            }}
          >
            Sign In
          </button>

          {/* Signup Link */}
          <div className="text-center pt-2">
            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold hover:underline"
                style={{ color: "var(--secondary-color)" }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;