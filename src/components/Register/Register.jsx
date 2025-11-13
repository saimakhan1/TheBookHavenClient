import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate, NavLink } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import DarkLight from "../DarkLight/DarkLight";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length >= 6
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      toast.error(
        "Password must be at least 6 characters, include uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration successful!");
        navigate("/");

        const newUser = {
          name: name || user.displayName || "Anonymous",
          email: user.email,
          image: photoURL || user.photoURL || "",
        };

        axios
          .post("https://the-book-haven-server-rose.vercel.app/users", newUser, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log("User saved:", res.data);
          })
          .catch((err) => {
            console.log("Database error:", err);
            toast.error(`Registration failed: ${err.message}`);
          });
      })
      .catch((error) => toast.error(`Registration failed: ${error.message}`));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google login successful!");
        navigate("/");

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        axios
          .post("https://the-book-haven-server-rose.vercel.app/users", newUser, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log("User saved:", res.data);
          })
          .catch((err) => {
            console.log("Database error:", err);
            toast.error(`Google login failed: ${err.message}`);
          });
      })
      .catch((error) => toast.error(`Google login failed: ${error.message}`));
  };

  return (
    <div className="bg-[#e6f7fa] dark:bg-gray-900">
      <DarkLight />
      <div className="min-h-screen bg-gradient-to-br from-[#e6f7fa] to-[#d0f0ff] dark:from-gray-900 dark:to-gray-800 flex justify-center items-center py-10">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="card w-full max-w-md bg-white dark:bg-gray-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-[#0abde3] dark:text-[#38d3f8] mb-6">
              Create an Account
            </h2>

            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <label className="label font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-[#38d3f8] dark:focus:ring-[#38d3f8]/30"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="label font-semibold text-gray-700 dark:text-gray-300">
                Photo URL
              </label>
              <input
                type="text"
                className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-[#38d3f8] dark:focus:ring-[#38d3f8]/30"
                placeholder="Photo URL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />

              <label className="label font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-[#38d3f8] dark:focus:ring-[#38d3f8]/30"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="label font-semibold text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-[#38d3f8] dark:focus:ring-[#38d3f8]/30"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="btn w-full bg-[#0abde3] hover:bg-[#0097c2] dark:bg-[#38d3f8] dark:hover:bg-[#0aa4e0] text-white font-semibold mt-4 transition-colors duration-300"
              >
                Register Now
              </button>
            </form>

            <p className="text-center text-sm mt-4 dark:text-gray-300">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-500 dark:text-[#38d3f8] hover:underline font-semibold"
              >
                Log In
              </NavLink>
            </p>

            <div className="divider text-gray-400 dark:text-gray-500 mt-6">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mt-2 transition-colors duration-300"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="M0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
