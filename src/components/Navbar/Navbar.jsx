

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
//         <NavLink
//           className={({ isActive }) =>
//             `transition-colors duration-300 ${
//               isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
//             }`
//           }
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             `transition-colors duration-300 ${
//               isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
//             }`
//           }
//           to="/all-books"
//         >
//           All Books
//         </NavLink>
//       </li>
//       {!user && (
//         <li>
//           <NavLink
//             className={({ isActive }) =>
//               `transition-colors duration-300 ${
//                 isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
//               }`
//             }
//             to="/register"
//           >
//             Register
//           </NavLink>
//         </li>
//       )}
//       {user && (
//         <>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 `transition-colors duration-300 ${
//                   isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
//                 }`
//               }
//               to="/addBook"
//             >
//               Add Book
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 `transition-colors duration-300 ${
//                   isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
//                 }`
//               }
//               to="/myBooks"
//             >
//               My Books
//             </NavLink>
//           </li>
        
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-gradient-to-r from-[#0a8bbf] to-[#66c3e3] text-white shadow-md">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost lg:hidden text-white hover:text-[#e0f7ff] transition-colors duration-300"
//           >
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
//             className="menu menu-sm dropdown-content bg-[#0a8bbf]/95 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-2xl text-blue-50 hover:text-[#48dbfb] transition-colors duration-300 border-4 rounded border-blue-100 hover:border-blue-200 hover:border-4">
//           The <span className="text-blue-300">Book</span> Haven
//         </a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       <div className="navbar-end flex items-center gap-3">
//         {user ? (
//           <>
//             {user.photoURL && (
//               <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
//                 <img
//                   src={user.photoURL}
//                   alt={user.displayName}
//                   className="w-10 h-10 rounded-full border-2 border-white hover:border-[#e0f7ff] transition-all duration-300"
//                 />
//               </div>
//             )}
//             <button
//               className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
//               onClick={handleSignOut}
//             >
//               Log Out
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink
//               to="/login"
//               className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
//             >
//               Log In
//             </NavLink>
//             <NavLink
//               to="/register"
//               className="btn bg-[#66c3e3] hover:bg-[#0a8bbf] text-white border-none transition-colors duration-300"
//             >
//               Register
//             </NavLink>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
        <>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-[#cdeeff]" : "text-white hover:text-[#e0f7ff]"
                }`
              }
              to="/login"
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
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
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
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
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
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
            <button
              onClick={() => {
                handleSignOut();
                setIsOpen(false);
              }}
              className="text-white hover:text-[#e0f7ff]"
            >
              Log Out
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#0a8bbf] to-[#66c3e3] text-white shadow-md px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left: Hamburger for mobile */}
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden mr-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a className="text-2xl font-bold text-blue-50 hover:text-[#48dbfb] border-4 border-blue-100 rounded px-2 py-1">
            The <span className="text-blue-300">Book</span> Haven
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>

          {user && user.photoURL && (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-2 border-white hover:border-[#e0f7ff] transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="lg:hidden mt-2">
          <ul className="flex flex-col gap-2">{links}</ul>

          {user && user.photoURL && (
            <div className="mt-2 flex items-center justify-start">
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-[#e0f7ff] transition-all duration-300"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;


