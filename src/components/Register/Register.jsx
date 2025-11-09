// import React, { use } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";

// const Register = () => {
//   const { signInWithGoogle } = use(AuthContext);
// //handle google signin 
//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result.user);

//         const newUser = {
//           name: result.user.displayName,
//           email: result.user.email,
//           image: result.user.photoURL,
//         };

//         //create user in the database

//         fetch("http://localhost:3000/users", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(newUser),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data after user saved", data);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <fieldset className="fieldset">
//               <label className="label">Email</label>
//               <input type="email" className="input" placeholder="Email" />
//               <label className="label">Password</label>
//               <input type="password" className="input" placeholder="Password" />

//               <button className="btn btn-neutral mt-4">Register Now</button>
//             </fieldset>
//             <button
//               onClick={handleGoogleSignIn}
//               className="btn bg-white text-black border-[#e5e5e5]"
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

// export default Register;


// import React, { use, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useNavigate } from "react-router";
// const Register = () => {
//   const { createUser, signInWithGoogle } = use(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate=useNavigate()

//   // handle email/password register
//   const handleRegister = (e) => {
//     e.preventDefault();

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log("User registered:", user);
//  navigate("/");
//         const newUser = {
//           name: user.displayName || "Anonymous",
//           email: user.email,
//           image: user.photoURL || "",
//         };

//         // save user to database
//         fetch("http://localhost:3000/users", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(newUser),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data after user saved", data);
//           });
//       })
//       .catch((error) => {
//         console.log("Registration error:", error.message);
//       });
//   };

//   // handle Google Sign-In 
//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result.user);

//         const newUser = {
//           name: result.user.displayName,
//           email: result.user.email,
//           image: result.user.photoURL,
//         };

//         // create user in the database
//         fetch("http://localhost:3000/users", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(newUser),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data after user saved", data);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleRegister}>
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
//                   Register Now
//                 </button>
//               </fieldset>
//             </form>

//             <button
//               onClick={handleGoogleSignIn}
//               className="btn bg-white text-black border-[#e5e5e5]"
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

// export default Register;

import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handle email/password register
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User registered:", user);
        navigate("/");
        const newUser = {
          name: user.displayName || "Anonymous",
          email: user.email,
          image: user.photoURL || "",
        };

        // save user to database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("User saved:", data));
      })
      .catch((error) => console.log("Registration error:", error.message));
  };

  // handle Google Sign-In 
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("User saved:", data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7fa] to-[#d0f0ff] flex justify-center items-center py-10">
      <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
              Register Now
            </button>
          </form>

          <div className="divider text-gray-400 mt-6">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 mt-2"
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
  );
};

export default Register;
