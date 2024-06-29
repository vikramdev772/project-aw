// Navbar.jsx
import React, { useState, useEffect } from "react";
import l from "../images/letter-n.png";
import { Link, useNavigate } from "react-router-dom";
import { getUserName } from "./Api"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setUserName] = useState(""); 

 
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(""); 
    localStorage.removeItem("token");
    navigate("/signin"); 
  };

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      
      getUserName(token)
        .then(username => {
          setIsLoggedIn(true);
          setUserName(username);
          console.log(username);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
         
        });
    }
  }, []);

  return (
    <div className="bg-blue-400 bg-opacity-30 flex items-center rounded-lg m-[20px]  justify-between px-6 py-2 drop-shadow">

      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={l} alt="" className="w-[32px]" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        {isLoggedIn && <div className="text-white">{userName}</div>}
        {isLoggedIn ? (
          <button
            className="bg-slate-900 text-blue-500 px-4 py-2 rounded-lg shadow-xl hover:bg-slate-950 font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <button
              className="bg-slate-900 text-blue-500 px-4 py-2 rounded-lg shadow-xl hover:bg-slate-950 font-bold"
              onClick={() => navigate("/signin")}
            >
              Signin
            </button>
            <button
              className="bg-slate-900 text-blue-500 px-4 py-2 rounded-lg shadow-xl hover:bg-slate-950 font-bold"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
