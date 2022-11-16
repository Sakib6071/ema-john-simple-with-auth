import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = ({handleAddToCart,product}) => {
  const { img, name, price, seller, ratings } = product;
  

  return (
    <div className="product">
        
      <img src={img} alt="productPhoto" />
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productPrice">Price : ${price}</p>
        <p className="productSeller">{seller}</p>
        <p className="productRatings">{ratings}</p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="addToCart">
        <p className="btnText">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
