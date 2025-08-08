import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-lg">
      {/* বাম পাশের লিংক */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300 font-semibold">Home</Link>
        
      </div>

      {/* ডান পাশে লগআউট */}
      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;
