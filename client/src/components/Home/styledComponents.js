import styled from 'styled-components';

export const HomeContainer = styled.section`
  background-image: url('https://static.vecteezy.com/system/resources/previews/013/012/928/large_2x/wood-table-top-with-supermarket-grocery-store-blurred-background-with-bokeh-light-for-product-display-photo.jpg');
  background-size: cover;
  background-position: center;
  color: #000;
  height: 90vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 150px 0;
  position: relative;

  /* Overlay for text contrast */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* dark overlay */
    z-index: -1;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  text-align: center;
`;

export const ContentColumn = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;
  padding: 20px;
  animation: fadeInUp 1s ease-in-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Heading = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 25px;
  background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Gradient for heading */
  -webkit-background-clip: text;
  background-clip: text;
  color: 000;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px; /* Adds space between letters */
  animation: glow 2s ease-in-out infinite;

  /* Animation for glowing text */
  @keyframes glow {
    0% {
      text-shadow: 0 0 5px #ff7e5f, 0 0 10px #ff7e5f, 0 0 15px #ff7e5f;
    }
    50% {
      text-shadow: 0 0 10px #feb47b, 0 0 20px #feb47b, 0 0 30px #feb47b;
    }
    100% {
      text-shadow: 0 0 5px #ff7e5f, 0 0 10px #ff7e5f, 0 0 15px #ff7e5f;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: #000;
  margin-bottom: 35px;
  max-width: 650px;
  line-height: 1.8;
  opacity: 0.9;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.5px;
  animation: fadeIn 1.2s ease-in-out;

  /* Adding fade-in effect */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Adding a subtle animation effect to text */
  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: #ff7e5f;
    margin: 0 auto 15px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 26px;
  font-family: 'Bree Serif', serif;
  font-weight: bold;
  border-radius: 50px;
  background: linear-gradient(135deg, #f030b6, #ff3781); /* Gradient background */
  border: 2px solid transparent;
  color: pink;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #ff3781, #f030b6);
    transform: translateY(-3px); /* Slight lift effect */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Adding shadow on hover */
  }

  &:focus {
    outline: none;
  }

  /* Adding a subtle animation on button load */
  animation: buttonLoad 0.5s ease-out;

  @keyframes buttonLoad {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

