

// import React, { useState, useContext } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { toast, Toaster } from "react-hot-toast";

// const LogIn = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignInUser = (e) => {
//     e.preventDefault();
//     signInUser(email, password)
//       .then((result) => {
//         toast.success("Login successful!");
//         window.location.href = "/";
//       })
//       .catch((error) => toast.error(`Login failed: ${error.message}`));
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         toast.success("Google login successful!");
//         window.location.href = "/";
//       })
//       .catch((error) => toast.error(`Google login failed: ${error.message}`));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#d0f0ff] flex justify-center items-center py-10">
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
//             Welcome Back
//           </h2>
//           <form onSubmit={handleSignInUser} className="flex flex-col gap-4">
//             <label className="label font-semibold text-gray-700">Email</label>
//             <input
//               type="email"
//               className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label className="label font-semibold text-gray-700">Password</label>
//             <input
//               type="password"
//               className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <div className="text-right mt-1">
//               <span className="text-sm text-blue-500 hover:underline cursor-pointer">
//                 Forgot Password?
//               </span>
//             </div>

//             <button
//               type="submit"
//               className="btn w-full bg-[#0abde3] hover:bg-[#0097c2] text-white font-semibold mt-4"
//             >
//               Log In Now
//             </button>
//           </form>

//           <p className="text-center text-sm mt-4">
//             Don't have an account?{" "}
//             <a
//               href="/register"
//               className="text-blue-500 hover:underline font-semibold"
//             >
//               Register
//             </a>
//           </p>

//           <div className="divider text-gray-400 mt-6">OR</div>

//           <button
//             onClick={handleGoogleSignIn}
//             className="btn w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 mt-2"
//           >
//             <svg
//               aria-label="Google logo"
//               width="20"
//               height="20"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//             >
//               <g>
//                 <path d="M0 0H512V512H0" fill="#fff"></path>
//                 <path
//                   fill="#34a853"
//                   d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                 ></path>
//                 <path
//                   fill="#4285f4"
//                   d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                 ></path>
//                 <path
//                   fill="#fbbc02"
//                   d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                 ></path>
//                 <path
//                   fill="#ea4335"
//                   d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                 ></path>
//               </g>
//             </svg>
//             Sign In with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { toast, Toaster } from "react-hot-toast";

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
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#d0f0ff] flex justify-center items-center py-10">
      <Toaster position="top-right" />
      <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleSignInUser} className="flex flex-col gap-4">
            <label className="label font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full focus:border-[#0abde3] focus:ring focus:ring-[#0abde3]/30"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn w-full bg-[#0abde3] hover:bg-[#0097c2] text-white font-semibold mt-4"
            >
              Log In Now
            </button>
          </form>

          <div className="divider text-gray-400 mt-6">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 mt-2"
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
        </div>
      </div>
    </div>
  );
};

export default LogIn;
