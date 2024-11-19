import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;  
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 2px;
  margin-top: 10px;
`;

export const ProductDescription = styled.p`
  color: #555;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #22aaff;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 260px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: lightgreen;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }
`;

export const ProductRating = styled.p`
  font-size: 16px;
  color: #ffb400; /* Golden yellow color for rating */
  margin-top: 8px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const InStock = styled.p`
  font-size: 14px;
  color: ${props => (props.inStock ? 'green' : 'red')}; /* green for in-stock, red for out of stock */
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
`;

// Star container for rating
export const Stars = styled.span`
  margin-left: 5px;
  font-size: 18px;
  color: #ffb400; /* Golden yellow color */
`;

export const generateStars = (rating) => {
  // Create the stars based on the rating
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? '★' : '';
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return (
    <>
      {'★'.repeat(fullStars)}
      {halfStar}
      {'☆'.repeat(emptyStars)}
    </>
  );
};

