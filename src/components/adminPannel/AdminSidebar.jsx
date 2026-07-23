import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminSidebar() {
    return (
        <>
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-3 ">
                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white ">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                <Link to={"/adminPannel"} className='text-decoration-none'>
                                    <a
                                        href="#"
                                        class="list-group-item list-group-item-action py-2 ripple"
                                        aria-current="true" >
                                        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                                    </a>
                                </Link>
                                <Link to={"/adminPannel/addproducts"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Products</span>
                                    </a>
                                </Link>
                                <Link to={"/adminPannel/products"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fas fa-box fa-lg me-3 fa-fw"></i><span>Products</span></a
                                    >
                                </Link>
                                <Link to={"/adminPannel/user"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fas fa-users me-2"></i><span>Total Count Users</span></a
                                    >
                                </Link>
                                <Link to={"/adminPannel/order"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fa-solid fa-cart-arrow-down"></i><span>Order Panel</span></a
                                    >
                                </Link>

                                {/* <Link to={"/adminPannel/manageuser"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fas fa-lock fa-fw me-3"></i><span>ManageUser</span></a
                                    >
                                </Link> */}
                                {/* <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Logout</span></a
                                > */}
                                <Link to={"/adminPannel/reports"}className='text-decoration-none'>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fa-solid fa-chart-column"></i><span>Reports</span></a
                                    >
                                  </Link>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Admin Componenets */}
                <div className="col-lg-9">
                    <Outlet />
                </div>
            </div>
        </>
     )
 };
export default AdminSidebar;