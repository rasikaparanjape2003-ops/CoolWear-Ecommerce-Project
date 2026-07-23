
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Register() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    });

    const API_URL = "http://localhost:8080/user";

    // useEffect(() => {
    //     if (id) {
    //         axios.get(`${API_URL}/${id}`)
    //             .then((res) => {
    //                 setUser(res.data.user);
    //                 setemail(res.data.email);
    //                 setContact(res.data.contact);
    //                 setPassword(res.data.password);
    //             });
    //     }
    // }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
        
               const { id, value } = e.target;

    // Contact → only numbers & max 10 digits
    if (id === "contact") {
        if (!/^\d*$/.test(value)) return;
        if (value.length > 10) return;
    }

    // Name → only letters and spaces
    if (id === "name") {
        if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    setUser({ ...user, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

         // Contact validation
    if (!/^\d{10}$/.test(user.contact)) {
        alert("Contact must be exactly 10 digits");
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
        alert("Enter valid email address");
        return;
    }

    // Password validation
    if (user.password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

        
        axios.post(API_URL, user)
            .then(() => {
                alert("User Register Successfully ✅");
                navigate("/allproducts");
            });

    };

    // You can add validation here

    // After successful registration
    // navigate("/allproducts");


    return (
        <>
            <section class="vh-90" style={{ backgroundColor: "#eee" }}>
                <div class="container h-90">
                    <div class="row d-flex justify-content-center align-items-center h-90">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" >
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <form class="mx-1 mx-md-4" onSubmit={handleSubmit} >

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                        <input type="text" id="name"  value={user.name}placeholder="Your Name" class="form-control" onChange={handleChange} required/>
                                                        {/*<label class="form-label" for="form3Example1c">Your Name</label>*/}
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" value={user.email}placeholder="Your Email" class="form-control" onChange={handleChange} required />
                                                        {/* <label class="form-label" for="form3Example3c">Your Email</label> */}
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                        <input type="text" id="contact" value={user.contact} maxLength="10" placeholder="Your Contact No" class="form-control" onChange={handleChange} required/>
                                                        {/* <label class="form-label" for="form3Example3c">Your Email</label> */}
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" value={user.password} placeholder="Password" class="form-control" onChange={handleChange} required />
                                                        {/* <label class="form-label" for="form3Example4c">Password</label> */}
                                                    </div>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">
                                                        Register
                                                    </button>

                                                </div>

                                                <div class="text-center">
                                                    <p>Do You Have already Account? <a href="login">Login</a></p>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register;