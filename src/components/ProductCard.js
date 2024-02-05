import React from "react";
import "../assets/styles/ProductCard.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import wishlistSvg from "../assets/images/wish.svg";
import prodcompare from "../assets/images/prodcompare.svg";
import view from "../assets/images/view.svg";
import addtocart from "../assets/images/add-cart.svg";

const ProductCard = ({ product }) => {
  const { id, name, price, quantityInStock, image } = product;

  return (
    <div className="col-3 mb-1 d-flex">
      <Link className="product-card position-relative d-block">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wishlistSvg} alt="wishList" />
          </Link>
        </div>
        <div className="product-image">
          <img src={image} className="img-fluid" alt={name} style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="product-details">
          <h6 className="productId">{id}</h6>
          <h6 className="brand">{name}</h6>
          <h5>Product Card provides comprehensive details about a product</h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">${price}</p>
          <h6>({quantityInStock})</h6>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src={prodcompare} alt="wishList" />
            </Link>
            <Link>
              <img src={view} alt="wishList" />
            </Link>
            <Link>
              <img src={addtocart} alt="wishList" />
            </Link>
          </div>
        </div>
        <div className="d-grid gap-10 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">Edit</button>
          <button className="btn btn-primary" type="button">View</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
