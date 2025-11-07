import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-800 text-white px-4">
      <h2 className="text-9xl font-extrabold mb-4 text-purple-400 drop-shadow-lg">
        404
      </h2>
      <h2 className="text-3xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Sorry, we couldn’t find the page you’re looking for.  
        It might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
