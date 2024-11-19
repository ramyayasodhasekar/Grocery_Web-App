import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookies";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiCircleRemove } from 'react-icons/ci';

// Styled components
const CartContainer = styled.div`
  max-width: 600px;
  margin: 10vh auto;
  padding: 20px;
  text-align: start;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding: 5px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 0 0 5px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff6347;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff2a00;
  }
`;

const BuyButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;

const MyCart = () => {
  const userId = Cookies.getItem("userId");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = () => {
    axios
      .get(`http://localhost:5100/cart/${userId}`)
      .then((response) => {
        setCartData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  const handleCancelClick = (productId) => {
    axios
      .delete(`http://localhost:5100/remove-from-cart/${productId}`)
      .then(() => {
        setCartData((prevCartData) =>
          prevCartData.filter((item) => item._id !== productId)
        );
        getProductsList();
      })
      .catch((error) => {
        console.error("Error removing product from cart:", error);
      });
  };

  return (
    <CartContainer>
      <h2>My Cart</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartData.map((item) => (
          <CartItem key={item._id}>
            <ProductImage src={item.image} alt="Product" />
            <ProductInfo>
              <ProductName>{item.productname}</ProductName>
              <ProductPrice>Price: ${item.price}</ProductPrice>
            </ProductInfo>
            <ActionButtons>
              <BuyButton to={`/order-details/${item._id}`}>Buy this</BuyButton>
              <RemoveButton title="Remove" onClick={() => handleCancelClick(item._id)}>
                <CiCircleRemove />
              </RemoveButton>
            </ActionButtons>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default MyCart;
