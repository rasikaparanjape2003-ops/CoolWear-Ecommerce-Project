
import loginlogo from '../assets/images/loginlogo.jpeg'
import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {

    let navigate = useNavigate();

    const [credential, setCredential] = useState({
        email: "",
        password: "",
        cPassword: ""
    });

    function handleChange(e) {
        setCredential({ ...credential, [e.target.id]: e.target.value });
        // console.log(credential);
    }

    function handleSubmit() {

        if (credential.email.toLowerCase() === "" || credential.password.toLowerCase() === "" || credential.cPassword.toLowerCase() === "") {
            alert("All Fileds are Mandatory !!!")
        } else {
            if (credential.password.toLowerCase() === credential.cPassword.toLowerCase()) {
                // console.log(credential);

                axios.post("http://localhost:8080/user/login", credential)
                    .then((res) => {
                        // console.log(res.data.data)

                        localStorage.setItem("userName", JSON.stringify(res.data.data.name))
                        localStorage.setItem("userId", JSON.stringify(res.data.data._id))
                        navigate('/allproducts')
                    });
            } else {
                alert("Password Does not match")
            }
        };
    };

    useEffect(() => {
        let userId = JSON.parse(localStorage.getItem("userId"))
        // console.log(userId);

        if (userId) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-center">
                        <img src={loginlogo} class="img-fluid w-100" alt="" />

                    </div>
                    <div className="col-lg-4">
                        {/*  Pills navs  */}
                        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link " id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                        </ul>
                        {/* Pills navs  */}

                        {/* Pills content  */}
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div class="text-center mb-3">
                                        <p>Sign in with:</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-google"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-github"></i>
                                        </button>
                                    </div>

                                    <p class="text-center">or:</p>

                                    {/* Email input  */}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input value={credential.email} onChange={handleChange} type="email" id="email" placeholder="Email" class="form-control" />
                                        {/* <label class="form-label" htmlFor="loginName">Email or username</label> */}
                                    </div>

                                    {/* Password input  */}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input value={credential.password} onChange={handleChange} type="password" id="password" placeholder="Password" class="form-control" />
                                        {/* <label class="form-label" htmlFor="loginPassword">Password</label> */}
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input value={credential.cPassword} onChange={handleChange} type="password" id="cPassword" placeholder="Confirm Password" class="form-control" />
                                        {/* <label class="form-label" htmlFor="loginPassword">Password</label> */}
                                    </div>

                                    {/* 2 column grid layout */}
                                    <div class="row mb-4">

                                        <div class="col-md-6 d-flex justify-content-center">
                                            {/* Simple link  */}
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>

                                    {/* Submit button  */}
                                    <button onClick={handleSubmit} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Log in</button>

                                    {/* Register buttons  */}
                                    {/* <div class="text-center">
                                        <p>Do You Have already Account? <a href="signup">Signup</a></p>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                        {/* Pills content  */}
                    </div>
                    <div className="col-lg-3 d-flex align-items-center">

                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;