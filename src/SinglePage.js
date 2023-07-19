import React from "react";
import { useFetch } from "./Context";
import './SinglePage.css'

const SinglePage = () => {
    const {selectedProduct, removeData} = useFetch();
    console.log("========= selectedProduct", selectedProduct);
    const {images, category,title, description, rating, price, id} = selectedProduct;

    const removeProduct = () => {
        removeData();
    }
  return (
    <>
      <div className="product">
        <div className="image">
          <img src={images[0]} alt="product-image" />
        </div>
        <div className="desc-container">
          <p className="product_category">{category}</p>
          <p className="product_title">{title}</p>
          <p>{description}</p>
          <p className={rating}>
            <i class="fa-solid fa-star"></i> {rating}
          </p>
          <p className="product_price">
            <span>&#8377;</span> {price}
          </p>
          <button onClick={removeProduct} className="btn btn-primary m-3">
           Back
          </button>
          <button className="btn btn-warning m-1">Add to cart</button>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
