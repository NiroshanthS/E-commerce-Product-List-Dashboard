import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsPinterest, BsInstagram, BsYoutube} from "react-icons/bs";

//import images
import newsletterPng from "../assets/images/newsletter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="py-4 container-fluid">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletterPng} alt="newsletter"/>
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7"> 
              <div className="input-group">
                  <input type="text" className="form-control py-1" placeholder="Your E-mail Address" aria-label="Your E-mail Address" aria-describedby="basic-addon2"/>
                  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 container-fluid">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white" fs-6>No.814, V.C Road, <br/>Vantharumoolai, <br/>Postel Code: 30376</address>
                <a href="tel: +94 7585 95105" className="text-white mt-3 d-block mb-1">+94 7585 95105</a>
                <a href="mailto:" className="text-white mt-4 d-block mb-0">info@UniRevok.com</a>
                <div className="social_icons d-flex align-items-center gap-20 mt-4">
                  <a className="text-white"  href="">
                    <BsTwitter className="fs-4"/>
                  </a>
                  <a className="text-white"  href="">
                    <BsFacebook className="fs-4"/>
                  </a>
                  <a className="text-white"  href="">
                    <BsPinterest className="fs-4"/>
                  </a>
                  <a className="text-white"  href="">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white"  href="">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 container-fluid">
        <div className="container.xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {currentYear} Powered by UniRevok</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer