import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "../assets/styles/ProductList.css";
import ReactStars from "react-rating-stars-component";

import headphone from "../assets/images/headphone.jpg";
import watch from "../assets/images/watch.jpg";
import gr from "../assets/images/gr.svg";
import gr2 from "../assets/images/gr2.svg";
import gr3 from "../assets/images/gr3.svg";
import gr4 from "../assets/images/gr4.svg";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts]=useState(0);
  const productsPerPage = 12;

  useEffect(() => {
    // Fetching products from the JSON file
    fetch("/data/products.json") 
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setTotalProducts(data.length);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className="product-list-container">
      <div className="store-wrapper home-wrapper-2 py-5 container-fluid">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul>
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                    <div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Instock"/>
                        <label className="form-check-lable" htmlFor="Instock">In stock (1)</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Outofstock"/>
                        <label className="form-check-lable" htmlFor="Outofstock">Out of stock (1)</label>
                      </div>
                    </div>
                  <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating">
                        <label htmlFor="from" className="form-label">From</label>
                        <input type="text" className="form-control" id="from" placeholder="$" />
                      </div>
                      <div className="form-floating">
                        <label htmlFor="to" className="form-label">To</label>
                        <input type="text" className="form-control" id="to" placeholder="$" />
                      </div>
                    </div>
                  <h5 className="sub-title">Colors</h5>
                    <div className="d-flex flex-warp">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="s"/>
                      <label className="form-check-lable" htmlFor="s">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="m"/>
                      <label className="form-check-lable" htmlFor="">M (0)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="l"/>
                      <label className="form-check-lable" htmlFor="l">L (0)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="xl"/>
                      <label className="form-check-lable" htmlFor="xl">XL (0)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="xxl"/>
                      <label className="form-check-lable" htmlFor="xxl">XXL (0)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">iPhone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tablet</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smart watch</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                    <img src={headphone} className="img-fluid" alt="headphone" />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones bulk 1 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                    <img src={watch} className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Smart watch bulk 1 pack multi colored for adults</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$99</b>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0"  style={{width:"100px"}}>Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="create-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">{totalProducts} Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img src={gr4} className="" alt="grid"/>
                      <img src={gr2} className="" alt="grid"/>
                      <img src={gr3} className="" alt="grid"/>
                      <img src={gr} className="" alt="grid"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list mt-2 pb-5">
              {currentProducts.map((product) => (
                //ProductCards are inserting from ProductCard.Js
              <ProductCard key={product.id} product={product} />
              ))}
              </div>
              <div className="pagination col d-flex justify-content-center mb-0">
                <Pagination
                //pagination components are inserting from Pagination.Js
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductList;
