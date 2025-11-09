// import React, { use } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = use(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => console.log("Signed out"))
//       .catch((error) => console.error(error));
//   };
//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/all-books">All Books</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/register"}>Register</NavLink>
//       </li>
//       {user && (
//         <>
//           <li>
//             <NavLink to="/myBooks">My Books</NavLink>
//           </li>
//           <li>
//             <NavLink to="/addBook">Add Book</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">
//           The <span className="text-primary">Book</span> Haven
//         </a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <a onClick={handleSignOut} className="btn">
//             Sign Out
//           </a>
//         ) : (
//           <NavLink to={'/login'} className="btn">Log In</NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
//______________________________________________
// import React, { use } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = use(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => console.log("Signed out"))
//       .catch((error) => console.error(error));
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink className="hover:text-[#0abde3]" to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink className="hover:text-[#0abde3]" to="/all-books">All Books</NavLink>
//       </li>
//       <li>
//         <NavLink className="hover:text-[#0abde3]" to="/register">Register</NavLink>
//       </li>
//       {user && (
//         <>
//           <li>
//             <NavLink className="hover:text-[#0abde3]" to="/myBooks">My Books</NavLink>
//           </li>
//           <li>
//             <NavLink className="hover:text-[#0abde3]" to="/addBook">Add Book</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-[#0097c2] text-white shadow-md">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-[#0097c2] rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl text-white">
//           The <span className="text-[#0abde3]">Book</span> Haven
//         </a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <button
//             onClick={handleSignOut}
//             className="btn bg-[#0abde3] hover:bg-[#09a3c1] text-white"
//           >
//             Sign Out
//           </button>
//         ) : (
//           <NavLink
//             to={'/login'}
//             className="btn bg-[#0abde3] hover:bg-[#09a3c1] text-white"
//           >
//             Log In
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//__________________

import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
            }`
          }
          to="/all-books"
        >
          All Books
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
              }`
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
                }`
              }
              to="/myBooks"
            >
              My Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
                }`
              }
              to="/addBook"
            >
              Add Book
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-[#0a8bbf] to-[#66c3e3] text-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white hover:text-[#e0f7ff] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#0a8bbf]/95 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-white hover:text-[#48dbfb] transition-colors duration-300">
          The <span className="text-[#0abde3]">Book</span> Haven
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            {user.photoURL && (
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-[#e0f7ff] transition-all duration-300"
                />
              </div>
            )}
            <button
              className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;




