"use client";
import React, { useEffect, useState } from "react";
const Loader = () => {
    const [loading, setLoading] = useState(true);
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  };
  
  export default Loader;
  