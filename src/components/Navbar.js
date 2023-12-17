import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

   const navigate = useNavigate();

    let location = useLocation();
    React.useEffect(() => {
        console.log(location.pathname)
    }, [location]);

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contactus" ? "active" : ""}`} aria-disabled="true" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                    {
                        localStorage.getItem('token') ? <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
                        : <div className="d-flex">
                        <Link className='btn btn-primary mx-2' to="/login" role='button'>Login</Link>
                        <Link className='btn btn-primary mx-2' to="/signup" role='button'>Signup</Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;