// // import React, { use } from "react";
// // import { AuthContext } from "../../Contexts/AuthContext";

// // const LogIn = () => {
// //   const { signInUser } = use(AuthContext);

// //   const handleSignInUser = () => {
// //     signInUser()
// //       .then((result) => {
// //         console.log(result);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };
// //   return (
// //     <div className="hero bg-base-200 min-h-screen">
// //       <div className="hero-content flex-col lg:flex-row-reverse">
// //         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// //           <div className="card-body">
// //             <fieldset className="fieldset">
// //               <label className="label">Email</label>
// //               <input type="email" className="input" placeholder="Email" />
// //               <label className="label">Password</label>
// //               <input type="password" className="input" placeholder="Password" />

// //               <button className="btn btn-neutral mt-4">Log In Now</button>
// //             </fieldset>
// //             <button
// //               onClick={handleSignInUser}
// //               className="btn bg-white text-black border-[#e5e5e5]"
// //             >
// //               <svg
// //                 aria-label="Google logo"
// //                 width="16"
// //                 height="16"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 512 512"
// //               >
// //                 <g>
// //                   <path d="m0 0H512V512H0" fill="#fff"></path>
// //                   <path
// //                     fill="#34a853"
// //                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
// //                   ></path>
// //                   <path
// //                     fill="#4285f4"
// //                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
// //                   ></path>
// //                   <path
// //                     fill="#fbbc02"
// //                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
// //                   ></path>
// //                   <path
// //                     fill="#ea4335"
// //                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
// //                   ></path>
// //                 </g>
// //               </svg>
// //               Sign In with Google
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LogIn;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Contexts/AuthContext";

// const LogIn = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext); // ✅ useContext
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   // handle email/password login
//   const handleSignInUser = (e) => {
//     e.preventDefault();
//     signInUser(email, password)
//       .then((result) => {
//         console.log("User logged in:", result.user);
//         navigate("/"); // ✅ redirect to home page after login
//       })
//       .catch((error) => {
//         console.error("Login error:", error.message);
//       });
//   };

//   // handle Google Sign-In
//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log("Google login:", result.user);
//         // optionally save user to DB if needed
//         navigate("/"); // ✅ redirect after Google login
//       })
//       .catch((error) => {
//         console.error("Google login error:", error.message);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleSignInUser}>
//               <fieldset className="fieldset">
//                 <label className="label">Email</label>
//                 <input
//                   type="email"
//                   className="input"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <label className="label">Password</label>
//                 <input
//                   type="password"
//                   className="input"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />

//                 <button type="submit" className="btn btn-neutral mt-4">
//                   Log In Now
//                 </button>
//               </fieldset>
//             </form>

//             <button
//               onClick={handleGoogleSignIn}
//               className="btn bg-white text-black border-[#e5e5e5] mt-2"
//             >
//               <svg
//                 aria-label="Google logo"
//                 width="16"
//                 height="16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//               >
//                 <g>
//                   <path d="m0 0H512V512H0" fill="#fff"></path>
//                   <path
//                     fill="#34a853"
//                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                   ></path>
//                   <path
//                     fill="#4285f4"
//                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                   ></path>
//                   <path
//                     fill="#fbbc02"
//                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                   ></path>
//                   <path
//                     fill="#ea4335"
//                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                   ></path>
//                 </g>
//               </svg>
//               Sign In with Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const LogIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext); // ✅ useContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle email/password login
  const handleSignInUser = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        console.log("User logged in:", result.user);
        // No navigation library: you can use window.location if you want to go to home
        window.location.href = "/"; // ✅ redirect to home page after login
      })
      .catch((error) => {
        console.log("Login error:", error.message);
      });
  };

  // handle Google login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google login:", result.user);
        window.location.href = "/"; // redirect after Google login
      })
      .catch((error) => {
        console.log("Google login error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignInUser}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Log In Now
                </button>
              </fieldset>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] mt-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
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

export default LogIn;
