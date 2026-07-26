import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log("Signup Success:", response.data);

      alert(response.data.message);

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirect to Login
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);

        alert(error.response.data.message);
      } else if (error.request) {
        alert("No response received from backend.");
      } else {
        alert("Error: " + error.message);
      }
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
            Create Account
          </h2>

          <p
            className="mt-2 text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Join us and start your journey
          </p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text-color)" }}
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Email */}
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
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Password */}
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
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium"
                style={{ color: "var(--text-color)" }}
              >
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-xs font-medium hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base"
              style={inputStyle}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 mt-2"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "#ffffff",
            }}
          >
            Create Account
          </button>

          {/* Login Link */}
          <div className="text-center pt-2">
            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold hover:underline"
                style={{ color: "var(--secondary-color)" }}
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;