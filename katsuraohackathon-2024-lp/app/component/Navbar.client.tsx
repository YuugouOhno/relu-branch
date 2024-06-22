"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  console.log("test")
  const [sticky, setSticky] = useState(false);

  return (
    <div className={`bottom-0 w-full bg-white shadow-lg ${sticky ? 'top-0' : 'absolute'}`}>
      <nav className="flex justify-between items-center p-4">
        <div>Logo</div>
        <div>Links</div>
      </nav>
    </div>
  );
};

export default Navbar;