import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import DarkLight from "../DarkLight/DarkLight";

const LogIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Get the route the user was trying to visit (default to "/")
  const from = location.state?.from?.pathname || "/";

  const handleSignInUser = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(from, { replace: true }); // redirect to original page
      })
      .catch((error) => toast.error(`Login failed: ${error.message}`));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(`Google login failed: ${error.message}`));
  };

  return (
    <div className="bg-[#e6f7fa] dark:bg-gray-900">
      <DarkLight></DarkLight>
      <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#d0f0ff] dark:from-gray-900 dark:to-gray-800 flex justify-center items-center py-10">
      <Toaster position="top-right" />
      
      <div className="card w-full max-w-md bg-white dark:bg-gray-700 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-[#0abde3] dark:text-[#38d3f8] mb-6">
            Please Log In
          </h2>
          <form onSubmit={handleSignInUser} className="flex flex-col gap-4">
            <label className="label font-semibold text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-[#38d3f8] dark:focus:ring-[#38d3f8]/30"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label font-semibold text-gray-700 dark:text-gray-300">Password</label>
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
              Log In Now
            </button>
          </form>

          <div className="divider text-gray-400 dark:text-gray-500 mt-6">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mt-2 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="#4285F4"
                d="M113.47 309.408L66.06 377.516C39.95 346.494 25.5 308.632 25.5 267c0-35.147 11.086-67.787 29.747-94.93L113.47 309.408z"
              />
              <path
                fill="#34A853"
                d="M256 480c65.734 0 120.653-21.506 160.884-58.297L368.455 384C344.06 404.738 304.158 421 256 421c-80.275 0-148.116-52.378-172.023-124.122l-69.252 53.515C63.847 406.46 154.174 480 256 480z"
              />
              <path
                fill="#FBBC05"
                d="M464.04 211.6c3.446 20.217 5.46 41.09 5.46 62.4 0 22.485-2.5 44.4-7.2 65.92H256v-124h135.44z"
              />
              <path
                fill="#EA4335"
                d="M113.47 202.592l-69.252-53.515C63.847 105.54 154.174 32 256 32c65.734 0 120.653 21.506 160.884 58.297l-55.429 55.429C376.06 113.262 344.158 96 296 96 215.725 96 147.884 148.378 123.977 220.122z"
              />
            </svg>
            Sign In with Google
          </button>

          {/* Register link */}
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
            Don't have an account?{" "}
            <span
              className="text-[#0abde3] dark:text-[#38d3f8] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogIn;
