import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const location = useLocation();
    const registerdata = location.state;
    //const[email,setEmail]=useState("")
    //const[pass,setPass]=useState("")
    const[formdata,setFormdata]=useState({user:"",pass:""})

    const print = (e)=>{
        e.preventDefault();
        console.log("Register data",registerdata)
        console.log("Login data",formdata)
        if(formdata.user===registerdata.name && formdata.pass===registerdata.password){
            console.log("Login Success")
            navigate("/dashboard",{state:formdata})
        }else{
            console.log("Invalid credentials")
        }
    }

function handlechange(e){
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
}

    return( 
    <>
{/*
    <div>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button onClick={()=>console.log(email,pass)}>Submit</button>
    </div>


    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button type="submit">Submit</button>
    </form>
    */}
    
<div className="min-h-screen bg-red-200 flex items-center justify-center p-4 ">

        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Login
            </h1>

          
            <form onSubmit={print} className="space-y-5">

                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Username:
                    </label>

                    <input placeholder="Enter username" required type="text" name="user" value={formdata.user} onChange={handlechange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Password:
                    </label>

                    <input placeholder="Enter password" required type="password" name="pass" value={formdata.pass} onChange={handlechange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-500 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>

            </form>

        </div>
    </div>
    </>
    );
}
export default Login;