import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
// import Gallery from './components/Gallery'
import AllProducts from './components/AllProducts'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import ProductDetails from './components/ProductsDetails'
import CategoryProducts from './components/CategoryProducts'
import Receipt from './components/Receipt'
import OrderTracking from './components/OrderTracking'
import ThankYou from './components/ThankYou'

import AdminDashboard from './components/adminPannel/AdminDashboard'
import AdminSidebar from './components/adminPannel/AdminSidebar'

import AdminLogin from './components/adminPannel/AdminLogin'
import AddProduct from './components/adminPannel/AddProduct'
import Products from './components/adminPannel/Products'
import User from './components/adminPannel/User'
import Order from './components/adminPannel/Order'
import AdminReport from './components/adminPannel/AdminReport'
// import ManageUser from './components/adminPannel/ManageUser'

function App() {
   const [cart, setCart] = useState([]);
   
  return (
    
    <div className='App'>

      <BrowserRouter>
       
      
        <Header cart={cart}/>
        <Routes>
          
            {/* <Route path index element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order" element={<Order />} />
            <Route path="/allproducts" element={<AllProducts cart={cart} setCart={setCart}/>} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/category/:categoryName" element={<CategoryProducts />} />
            {/* <Route path="/category/:category" element={<CategoryProducts />} /> */}
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/thankyou" element={<ThankYou />} />
           
            <Route path="/adminlogin" element={<AdminLogin />} />

            <Route path={"/adminPannel"} element={<AdminSidebar />}>
            <Route index element= {<AdminDashboard />} />
            <Route path={"/adminPannel/addproducts"} element={<AddProduct />} />
            <Route path={"/adminPannel/products"} element={<Products />} />
            <Route path={"/adminPannel/addproducts/:id"} element={<AddProduct />} />
            <Route path={"/adminPannel/user"} element={<User />} />
            <Route path={"/adminPannel/order"} element={<Order />} />
            <Route path="reports"element={<AdminReport />} />
            
            {/* <Route path="/adminPannel/manageuser" element={<ManageUser />} />
            <Route path="/adminPannel/manageuser/:id" element={<ManageUser />} /> */}
            <Route path={"/adminPannel/order"} element={<Order />} />

            </Route>
          </Routes> 
          <Footer/>   
          
      </BrowserRouter>
       
     </div>
   )
};

export default App;