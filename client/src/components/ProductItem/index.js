import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookies'
import { ProductContainer, ProductName, ProductDescription, ProductPrice, ProductImage, ButtonContainer, Button, ProductRating, InStock, Stars, generateStars } from './styledComponents';


const ProductItem = ({ id, name, price, description, img, rating, instock }) => {

  const handleAddToCart = async () => {
    const userId = Cookies.getItem("userId"); // Get the user ID from cookies or your authentication system

    try {
      const response = await axios.post("http://localhost:5100/add-to-cart", {
        userId,
        productId: id,
      });

      // Handle success here, you can show a success message or update the UI.
      alert('Product Added to cart!');
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error here, show an error message or log it.
    }
  };

  return (
    <ProductContainer>
      <ProductImage src={img} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>₹{price}</ProductPrice>
      <ProductDescription>{description}</ProductDescription>
      <ProductRating>
        Rating: {rating}
        <Stars>{generateStars(rating)}</Stars>
      </ProductRating>
      <InStock inStock={instock > 0}>
        {instock > 0 ? 'In Stock' : 'Out of Stock'}
      </InStock>
      <ButtonContainer>
        <Link to={`/order-details/${id}`} className="btn btn-primary" style={{borderRadius:'0'}}>Buy Now</Link>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </ButtonContainer>
      {/* <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div> */}
    </ProductContainer>
  );
};

export default ProductItem;
