import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();
 

  const handleLogout = () => {
    // console.log("Logout clicked");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/adminlogin";
    navigate("/adminlogin", {replace: true });
  };
  
  return (
    <div className="container-fluid p-4">

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <h4 className="text-white">CoolWear Admin Dashboard</h4>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Dashboard Content */}
      <div className="container mt-3">
        <h2 className="mb-3">Welcome Admin 👋</h2>

        <div className="row">

          {/* Products Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Products</h5>
                <p className="card-text">Add, Edit, Delete products</p>
                <button className="btn btn-primary">
                  View Products
                </button>
              </div>
            </div>
          </div>

          {/* Orders Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Orders</h5>
                <p className="card-text">Check customer orders</p>
                <button className="btn btn-success"
                 onClick={()=>navigate("/adminPannel/order")}
                >
                  View Orders
                </button>
              </div>
            </div>
          </div>

          {/* Users Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Users</h5>
                <p className="card-text">View registered users</p>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/adminPannel/user")}
                >
                  View Users
                </button>
              </div>
            </div>
           </div>
           

        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;