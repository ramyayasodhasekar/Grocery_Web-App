import React from 'react';
import { FooterWrapper, FooterContentWrapper, Section, FooterHeading, FooterParagraph, ContactInfo, FooterBottom, SocialLinks } from './styledComponents';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        {/* About Us Section */}
        <Section>
          <FooterHeading>About Us</FooterHeading>
          <FooterParagraph>"At <strong>Grocerystores</strong>, we believe in bringing the freshest, highest-quality groceries right to your doorstep.
           From farm-fresh produce to pantry essentials, our mission is to make grocery shopping effortless, convenient, and enjoyable. 
           We’re committed to providing the best products, at the best prices, so you can focus on what really matters—your family and home."</FooterParagraph>
        </Section>

        {/* Contact Us Section */}
        <Section>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <p>
              <strong>Email:</strong> support@grocerymart.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>If you have any questions or need assistance,
               we're here to help! <br/>
              please free to contact us!!!
            </p>
          </ContactInfo>
        </Section>

        {/* Social Media Section */}
        <Section>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialLinks>
            <Link to='#'><i className="fab fa-facebook"></i>FACEBOOK</Link><br/>
            <Link to='#'><i className="fab fa-twitter"></i>TIWTTER</Link><br/>
            <Link to='#'><i className="fab fa-instagram"></i>INSTAGRAM</Link><br/>
           </SocialLinks>
        </Section>
      </FooterContentWrapper>

      {/* Footer Bottom */}
      <FooterBottom>
        &copy; 2023 GroceryMart. All Rights Reserved.
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
