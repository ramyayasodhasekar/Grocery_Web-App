
import React from 'react';
import { HomeContainer,Container,CenteredRow,ContentColumn,Heading ,Paragraph,PrimaryButton} from "./styledComponents";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
//import About from '../About';
//import ContactUs from '../Contact';

const Home = () => {
  const onShop = () => {
    // Add your logic for the "Shop Now" button click// <About/>
//<ContactUs/>
    console.log('Shop Now clicked');
  };

  return (
    <div>
      <HomeContainer className="home-container">
      <Container>
        
        <CenteredRow>
          <ContentColumn>
            {<Heading>Welcome to Our online grocery Store</Heading>}
            {<Paragraph>Experience the freshest produce, handpicked just for you—because your family deserves the best!"</Paragraph> }
            <PrimaryButton> <Link to='/shopping' style={{textDecoration:'none',color:'white',fontWeight:'bolder'}}>Lets begin..</Link> </PrimaryButton>
          </ContentColumn>
        </CenteredRow>
      </Container>
    </HomeContainer>
    <Footer/>
    </div>
  );
}

export default Home;
