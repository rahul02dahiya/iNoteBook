import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const host = "http://127.0.0.1:5000";

const Login = () => {
    
   const [credentials, setCredentials] = useState({email:"",password:""});
   const navigate = useNavigate();
   
    const handleSubmit = async (e)=>{

        // To stop reload \/
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`,{
            method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email:credentials.email, password:credentials.password})
        });

        const json = await response.json();
        console.log(json.success);

        if(json.success){
            // Save auth token and redirect to notes page
            localStorage.setItem("inotetoken",json.authToken);
            console.log(localStorage.getItem("inotetoken"));
            console.log(json)
            navigate("/");
        }
        else{
            alert("Invelid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    

    return (
        <>
            <div className='d-flex justify-content-center' style={{"margin":"10%"}}>
                <h2 className='m-auto '>   Welcome back <hr /> &nbsp; in iNoteBo0k</h2>
                <form className='border rounded border-dark p-5 me-auto'  onSubmit={handleSubmit}  style={{ "width": "24rem" }}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )

}

export default Login;