// src/components/AdminLogin.jsx
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { adminLogin } from "../../utils/crud";


export default function AdminLogin() {
  const [loginDetails, setLoginDetails] = useState({});
  const api = "http://52.15.59.206/";
  useEffect(() => {
    sessionStorage.removeItem('adminToken');
  }, []);
  async function handleLogin(e) {
   
        e.preventDefault()
        try{
          const retVal = await adminLogin(api+"admin/dashboard",loginDetails)  
          
          if (retVal){
            sessionStorage.setItem('adminToken', true)
            alert("Login Successful")
            window.location.href = '/admin/websettings';
            
          } else{
            alert("Invalid Credentials")
          }
          
       }catch(err){
           console.log(err)
           }
       // You can send a fetch/axios POST request here
  }

  return (
    <form onSubmit={handleLogin} className="max-w-[700px] w-full text-black font-semibold bg-white shadow-lg rounded-lg p-6 m-auto mt-20">
      <div className="flex flex-col gap-4 p-4 w-full">
        <h1 className="text-2xl font-semibold text-left">Admin Login</h1>
        <input
          placeholder="Username"
          type="text"
          className="w-full border border-gray-900 p-2"
          value={loginDetails.username || ""}
         onChange={(e)=>setLoginDetails({...loginDetails, username:e.target.value})}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full border border-gray-900 p-2"
          value={loginDetails.password || ""}
          onChange={(e)=>setLoginDetails({...loginDetails, password: e.target.value})}
        />
        <Button type="submit" text="Login" />
      </div>
    </form>
  );
}