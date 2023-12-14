import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const host = "http://127.0.0.1:5000";

const Signup = () => {

  const [credentials, setCredentials] = useState({name:"", email:"",password:"", cpassword:""});
  let navigate = useNavigate();
  
   const handleSubmit = async (e)=>{

       // To stop reload \/
       e.preventDefault();

       const response = await fetch(`${host}/api/auth/createuser`,{
           method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password})
       });

       const json = await response.json();
       console.log(json.success);
       if(json.success){
        // Save auth token and redirect to notes page
        localStorage.setItem("token",json.authtoken);
        navigate("/");
    }
    else{
        alert("unable to signup Kindly retry");
    }
   }

   const onChange = (e) => {
       setCredentials({ ...credentials, [e.target.name]: e.target.value })
   }

  return (
    <>
        <div className='d-flex justify-content-center m-4 p-4'>
            <h2 className='m-auto '>Hola!  <hr /> Organize your notes  <hr /> &nbsp; with iNoteBo0k.</h2>
            <form className='border rounded border-dark p-5 me-auto' onSubmit={handleSubmit} style={{ "width": "24rem" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="name" name="name"  aria-describedby="emailHelp"  value={credentials.name} onChange={onChange} required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"  aria-describedby="emailHelp"  value={credentials.email} onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} required minLength={5} />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>

            </form>
        </div>
    </>
)
}

export default Signup