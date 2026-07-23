
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function ManageUsers() {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const { id } = useParams();
//     const navigate = useNavigate();

//     const API_URL = "http://localhost:8080/users"; // change if needed

//     // 🔹 Fetch user when editing
//     useEffect(() => {
//         if (id) {
//             axios.get(`${API_URL}/${id}`)
//                 .then((res) => {
//                     setName(res.data.name);
//                     setEmail(res.data.email);
//                     setPassword(res.data.password);
//                 })
//                 .catch((err) => console.log(err));
//         }
//     }, [id]);

//     // 🔹 Submit (Add or Update)
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const userData = { name, email, password };

//         if (id) {
//             axios.put(`${API_URL}/${id}`, userData)
//                 .then(() => {
//                     alert("User Updated Successfully ✅");
//                     navigate("/adminPannel/users");
//                 })
//                 .catch((err) => console.log(err));

//         } else {
//             axios.post(API_URL, userData)
//                 .then(() => {
//                     alert("User Added Successfully ✅");
//                     navigate("/adminPannel/users");
//                 })
//                 .catch((err) => console.log(err));
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h3>{id ? "Edit User" : "Add New User"}</h3>

//             <form onSubmit={handleSubmit}>

//                 <div className="mb-3">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Password</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-success">
//                     {id ? "Update User" : "Add User"}
//                 </button>

//             </form>
//         </div>
//     );
// }

// export default ManageUsers;