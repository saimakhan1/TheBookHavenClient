import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#e0f7fa] to-[#d0f0ff] p-6">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#0abde3] max-w-lg text-center p-10">
        <h1 className="text-6xl font-extrabold text-[#ff6b6b] mb-4 animate-pulse">
          😱 Oops!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Something went wrong in <span className="font-semibold text-[#0abde3]">Book Haven</span>.
        </p>
        <p className="text-red-500 mb-6 font-medium">
          Unexpected Error Occurred
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#0abde3] to-[#48dbfb] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
