import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#e0f7fa] to-[#d0f0ff] p-6 relative">
      {/* Floating Book Emojis */}
      <div className="absolute top-20 right-10 text-6xl animate-bounce">📚</div>
      <div className="absolute bottom-20 left-10 text-6xl animate-bounce">📖</div>

      <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#0abde3] max-w-lg text-center p-12 relative z-10">
        <h1 className="text-7xl font-extrabold text-[#ff6b6b] mb-4 animate-pulse">
          😱 Oops!
        </h1>
        <h1 className="text-8xl font-extrabold text-[#ff6b6b] my-4 animate-bounce">
          404
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We can't find the page you're looking for in{" "}
          <span className="font-semibold text-[#0abde3]">Book Haven</span>.
        </p>
        <p className="text-red-500 mb-6 font-medium animate-pulse">
          Unexpected Error Occurred
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#0abde3] to-[#48dbfb] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
