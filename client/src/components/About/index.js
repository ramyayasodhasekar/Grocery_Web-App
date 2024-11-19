import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f7f7f7;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const ContentContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 800px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
`;

const Highlight = styled.span`
  color: #ff5722;
  font-weight: bold;
`;

const About = () => {
    return (
        <AboutSection>
            <ContentContainer>
                <Heading>About Us</Heading>
                <Paragraph>
                    Welcome to <Highlight>GroceryMart</Highlight> - your one-stop destination for fresh and
                    quality groceries. We are dedicated to providing you with the finest
                    selection of products to make your shopping experience convenient and
                    enjoyable.
                </Paragraph>
                <Paragraph>
                    Our journey began in <Highlight>2005</Highlight>, and since then, we've been committed to
                    serving our customers with the freshest produce, pantry essentials,
                    and more. With a passion for quality and customer satisfaction, we
                    ensure that every item you find on our shelves meets the highest
                    standards.
                </Paragraph>
                <Paragraph>
                    Whether you're looking for everyday groceries, special ingredients for
                    your favorite recipes, or unique items for a special occasion, we've
                    got you covered. Shop with us and experience the joy of quality
                    groceries at your doorstep.
                </Paragraph>
            </ContentContainer>
        </AboutSection>
    );
};

export default About;
