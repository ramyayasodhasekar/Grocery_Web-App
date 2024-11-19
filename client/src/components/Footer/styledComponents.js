import styled from 'styled-components';

// Footer Wrapper (overall footer container)
export const FooterWrapper = styled.footer`
  background-color: #f4f4f4;
  color: #222;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

// Footer Content Wrapper for flex layout
export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

// Individual Section for About, Contact, etc.
export const Section = styled.div`
  flex: 1;
  text-align: left;
  padding: 20px;
  max-width: 350px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: scale(1.05); /* Subtle zoom on hover */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Heading in each section (e.g., About Us, Contact Us)
export const FooterHeading = styled.h3`
  font-size: 20px;
  color: #f030b6;
  margin-bottom: 15px;
  border-bottom: 2px solid #f030b6;
  display: inline-block;
  padding-bottom: 5px;
  text-transform: uppercase;
`;

// Styled Paragraphs for Section Content
export const FooterParagraph = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

// Contact Info Section
export const ContactInfo = styled.div`
  font-size: 14px;
  color: #777;
  line-height: 1.8;
  font-weight: 400;

  & strong {
    color: #f030b6;
  }
`;

// Social Media Links Section
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;  /* Stack the links vertically */
  align-items: flex-start;  /* Align to the left */
  gap: 10px;  /* Add space between each link */
  margin-top: 20px;
  height: 200px;

  & a {
    font-size: 18px;
    color: #f030b6;
    text-decoration: none;  /* Remove underline */
    transition: color 0.3s;
    
    display: flex;
    align-items: center;

    & i {
      margin-right: 10px;  /* Add space between the icon and text */
    }

    &:hover {
      color: #d22e92;  /* Darker pink for hover effect */
    }
  }
`;

// Footer Bottom Section
export const FooterBottom = styled.div`
  font-size: 14px;
  color: #555;
  opacity: 0.7;
  margin-top: 30px;
  text-align: center;
  font-weight: 300;
`;

