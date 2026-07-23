import axios from "axios";
import React, { useEffect, useState } from "react";


function Users() {

  const [data, setData] = useState([]);

  const API_URL = "http://localhost:8080/user";  // change if your route is different

  // Fetch Users
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);   // same as your product response
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Delete User
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        // refresh list
        setData(data.filter(user => user._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Registered Users</h3>

      {/* ✅ Total Count Added */}
    <h5 className="mb-3">
      Total Registered Users: 
      <span className="badge bg-primary ms-2">
        {data.length}
      </span>
    </h5>

      <table className="table table-striped table-bordered">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <h5>Total Registered Users: {data.length}</h5> */}
        <tbody>
        {data.length > 0 ? (
                  data.map((user, index) => (
                    <tr key={user._id} className="text-center">
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td>{user.password}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-muted">
                      No Users Found
                    </td>
                  </tr>
                )}
            </tbody>

      </table>
    </div>
  );
}

export default Users;