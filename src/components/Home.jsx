
// import img1 from '../assets/images/img1.jpeg'
// import img2 from '../assets/images/img2.jpeg'
// import img3 from '../assets/images/img3.jpeg'
// import img4 from '../assets/images/img4.jpeg'
// import img5 from '../assets/images/img5.jpeg'
// import img6 from '../assets/images/img6.jpeg'
// import img7 from '../assets/images/img7.jpeg'
// import img8 from '../assets/images/img8.jpeg'
// import img9 from '../assets/images/img9.jpeg'
// import img10 from '../assets/images/img10.jpeg'

// function Home() {
//     return (
//         <>
//             <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={img1} className="d-block w-100 carousal-img"  alt="img1"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img2} className="d-block w-100 carousal-img" alt="img2"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img3} className="d-block w-100 carousal-img" alt="img3"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img4} className="d-block w-100 carousal-img" alt="img4"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img5} className="d-block w-100 carousal-img" alt="img5"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img6} className="d-block w-100 carousal-img" alt="img6"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img7} className="d-block w-100 carousal-img" alt="img7"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img8} className="d-block w-100 carousal-img" alt="img8"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img9} className="d-block w-100 carousal-img" alt="img9"/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={img10} className="d-block w-100 carousal-img" alt="img10"/>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </>
//     )
// }
// export default Home;


import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    path: "men"
  },
  {
    name: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UznwLT7dDsZ3NvyoMfzgvXMFDhcmGmtcVw&s",
    path: "women"
  },
  {
    name: "Kids",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgZpjRGyiZDzhmPsktpG6RELCjTdZwzgmWg&s",
    path: "kids"
  }
]

  return (
    <div>

      {/* HERO SECTION */}
      <div className="container text-center mt-4">
        <h2 className="fw-bold">Trending Now 🔥</h2>
        <p className="text-muted">
          Discover latest fashion trends
        </p>
      </div>

      {/* CATEGORY SECTION */}
      <div className="container mt-5">
        <h3 className="mb-4 text-center">Shop By Category</h3>

        <div className="row">
          {categories.map((cat, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow border-0 category-card">
                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                  style={{ height: "400px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.name}</h5>

                  {/* ✅ REAL SHOP NOW BUTTON */}
                  <Link
                    to={`/register`}
                    className="btn btn-dark btn-sm mt-2"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

          {/* <div className="col-md-3">
            <div className="card shadow">
              <img src="https://via.placeholder.com/250x200" className="card-img-top" alt="accessories"/>
              <div className="card-body">
                <h5>Accessories</h5>
                <Link to="/category/accessories" className="btn btn-outline-dark btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div> */}

         {/* </div> */}
      {/* </div> */}

      {/* FEATURED PRODUCTS
      <div className="container mt-5">
        <h3 className="mb-4">Trending Products</h3>
        <div className="row">

          {[1,2,3,4].map((item) => (
            <div className="col-md-3 mb-4" key={item}>
              <div className="card shadow">
                <img src="https://via.placeholder.com/250x200" className="card-img-top" alt="product"/>
                <div className="card-body">
                  <h6>Product Name</h6>
                  <p>₹999</p>
                  <button className="btn btn-dark w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
       </div> */}

       {/* OFFER SECTION */}
       <div className="container-fluid bg-warning text-center p-4 mt-5">
        <h4>🔥 Big Sale - Up To 50% OFF 🔥</h4>
       </div>

        </div>
   );
}

export default Home;













