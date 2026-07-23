
import { Link, useNavigate } from "react-router-dom"
import coolwearlogo from '../assets/images/coolwearlogo.jpeg'
import { useEffect } from "react"

function Header() {

    let navigate = useNavigate();
    let userId = JSON.parse(localStorage.getItem("userId"));
    let userName = JSON.parse(localStorage.getItem("userName"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function handleLogout() {
        localStorage.removeItem("userId")
        navigate('/')
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg relative-top navbar-dark bg-info">
                <div className="container-fluid ">
                    <Link to={"/"}>
                        <a className="navbar-brand">
                            <img style={{ width: "100px" }} src={coolwearlogo} alt="" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-dark bg-success" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/AboutUs"} className="text-decoration-none">
                                <a className="nav-link">AboutUs</a>
                            </Link>
                            <Link to={"/allproducts"} className="text-decoration-none">
                                <a className="nav-link">AllProducts</a>
                            </Link>

                            <Link to={"/contact"} className="text-decoration-none">
                                <a className="nav-link">Contact</a>
                            </Link>
                            <Link to={"/adminlogin"} className="text-decoration-none">
                                <a className="nav-link">AdminLogin</a>
                            </Link>
                            {
                                userId ? (
                                    <li className="nav-item dropdown me-1">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {userName}
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item"><i class="fa-solid fa-bag-shopping"></i> Orders</a></li>
                                            {/* <li><a className="dropdown-item">Another action</a></li> */}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button onClick={handleLogout} className="dropdown-item"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button></li>
                                        </ul>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                    </>
                                )
                            }

                            <li className="nav-item" style={{ position: "absolute", right: "60px" }}>
                                <Link className="nav-link" to="/cart" style={{ position: "relative" }}>

                                    <span style={{ fontSize: "28px" }}>
                                        🛒
                                    </span>

                                    <span style={{
                                        position: "absolute",
                                        top: "-5px",
                                        right: "-10px",
                                        background: "red",
                                        color: "white",
                                        borderRadius: "50%",
                                        padding: "2px 6px",
                                        fontSize: "12px"
                                    }}>

                                        {cart.length}
                                    </span>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
};


export default Header;