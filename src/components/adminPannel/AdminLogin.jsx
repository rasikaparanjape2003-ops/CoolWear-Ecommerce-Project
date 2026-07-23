

import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AdminLogin() {

    let navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");


    function handleLogin(e) {
        e.preventDefault();
        // console.log("Login clicked");

        if (userId.toLowerCase() === "admin" && password === "1234") {
            localStorage.setItem("isLoggedIn", true)
            navigate("/adminPannel")
        } else {
            setUserId("")
            setPassword("")
            alert("Invalid Credential")
        }
        
    };
    
    useEffect(()=>{
        let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        
        if(isLoggedIn){
            navigate("/adminPannel")
        }
    },[])


    return (
        <>
            <section className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="text-center mb-3">
                                        {/* <Link to="/adminPannel"> */}
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgno5S1iuqN-9Dl4poZ0mtk_txSA6QJ7SCw&s" alt="" width="200" height="100" />
                                        {/* </Link> */}
                                    </div>
                                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                                    <form onSubmit={handleLogin}>
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" className="form-control" name="UserId" id="UserId" placeholder="name@example.com" required />
                                                    <label htmlFor="email" className="form-label">UserId</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Password" required />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                                                </div>
                                            </div>
                                            {/* <div className="col-12">
                                                <p className="m-0 text-secondary text-center">Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a></p>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminLogin;