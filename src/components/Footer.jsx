import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div className="me-3 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>CoolWear
                                </h6>

                                <p>
                                    CoolWear is your one-stop destination for trendy and affordable fashion.
                                    We offer a wide range of clothing for men, women, and kids, designed to
                                    match modern styles and everyday comfort. Our mission is to deliver
                                    high-quality products with the best shopping experience, secure payments,
                                    and fast delivery right to your doorstep.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>

                                <p>
                                    <Link to="/allproducts" className="text-reset text-decoration-none">
                                        Men's Wear
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/allproducts" className="text-reset text-decoration-none">
                                        Women's Wear
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/allproducts" className="text-reset text-decoration-none">
                                        Kids Wear
                                    </Link>
                                </p>
                            </div>

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>

                                <p>
                                    <Link to="/" className="text-reset text-decoration-none">
                                        Home
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/allproducts" className="text-reset text-decoration-none">
                                        AllProducts
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/cart" className="text-reset text-decoration-none">
                                        Cart
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/register" className="text-reset text-decoration-none">
                                        Register
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/login" className="text-reset text-decoration-none">
                                        Login
                                    </Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> India, IND 41600, INDIA</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    coolwear@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 99 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 86 235 478 74</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
};

 export default Footer;