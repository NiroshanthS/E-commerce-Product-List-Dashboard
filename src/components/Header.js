import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import compareSvg from "../assets/images/compare.svg";
import wishlistSvg from "../assets/images/wishlist.svg";
import userSvg from "../assets/images/user.svg";
import cartSvg from "../assets/images/cart.svg";
import menuSvg from "../assets/images/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 container-fluid">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 mb-2 mb-md-0">
              <p className="text-white mb-0">
                Free Shipping Over Rs.3000 & Free Returns
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-end text-white mb-0">
                Hotline: <a className="text-white" href="tel:+94758595105">+94 7585 95105</a> | <a className="text-white" href="tel:+9470809010">+94 7080 90100</a> 
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 ms-3 me-3 container-fluid">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-2 mb-2 mb-md-0">
              <h2>
                <Link className="text-white">UniRevok</Link>
              </h2>
            </div>
            <div className="col-md-5 mb-2 mb-md-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={compareSvg} alt="compare" />
                    <p className="mx-1 mb-0">
                      Compare<br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlistSvg} alt="wishlist" />
                    <p className="mx-1 mb-0">
                      Favourite<br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={userSvg} alt="user" />
                    <p className="mx-1 mb-0">
                      Login<br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={cartSvg} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark mx-1">0</span>
                      <p className="mb-0 mx-1">Rs 0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 ms-3 me-3 container-fluid"> 
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menuSvg} alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">Accessories</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">Laptops</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">Headphones</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
