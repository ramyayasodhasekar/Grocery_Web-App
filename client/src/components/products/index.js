import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';

const ProductsContainer = styled.div`
  margin-top: 10vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7f7f7, #e3e3e3);
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 30px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:focus {
    border-color: #ff3269;
    box-shadow: 0 0 8px rgba(255, 50, 105, 0.4);
  }
`;

const CategoryFilter = styled.select`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:focus {
    border-color: #ff3269;
    box-shadow: 0 0 8px rgba(255, 50, 105, 0.4);
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const HorizontalCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;  // Set to full height of the viewport
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
`;

const CarouselItem = styled.div`
  width: 100vw;  // Each item should take the full width of the viewport
  height: 100vh;  // Ensure each item takes full height
  flex-shrink: 0;
  background-color: #f8f9fa;
`;

const CarouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Products = () => {
  const api = 'http://localhost:5100/products';
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const carouselRef = useRef(null);
  const slideInterval = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));

    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
    }, 3000); // Automatic slide every 3 seconds

    return () => clearInterval(slideInterval.current);
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const filteredProducts = products.filter((product) => {
    const productNameMatchesSearch =
      product.productname && typeof product.productname === 'string' 
        ? product.productname.toLowerCase().includes(searchQuery.toLowerCase())
        : false;  // If the productname is undefined or not a string, it doesn't match
  
    const categoryMatchesSearch =
      product.category && typeof product.category === 'string'
        ? product.category.toLowerCase() === selectedCategory
        : false;  // If category is undefined or not a string, it doesn't match
  
    return selectedCategory === 'all'
      ? productNameMatchesSearch || searchQuery.trim() === ''  // Include products that match the search query
      : productNameMatchesSearch && categoryMatchesSearch;  // Include products that match both the search query and category
  });
  

  const categories = [
    'all',
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  const productImages = [
    'https://i.pinimg.com/1200x/90/bc/0c/90bc0c906fc30587b4863d0e6089f364.jpg',
    'https://wallpaperaccess.com/full/1843954.jpg',
    'https://wallpapercave.com/wp/wp3104819.jpg',
    'https://wallpapercave.com/wp/wp6865848.jpg',
    'https://iprod.mishry.com/wp-content/uploads/2019/06/packaged-food-brands-1024x768.png',
  ];

  return (
    <ProductsContainer>
      <Heading>Explore Our Product Banners</Heading>

      <HorizontalCarousel ref={carouselRef}>
        <CarouselWrapper style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <CarouselImage src={image} alt={`Banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </HorizontalCarousel>

      <FiltersContainer>
        <div className="w-100">
          <h3>Search By Product Name</h3>
          <SearchBar
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="w-100">
          <h3>Filter By Category</h3>
          <CategoryFilter onChange={handleCategoryChange} value={selectedCategory}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </CategoryFilter>
        </div>
      </FiltersContainer>

      <Heading>Products</Heading>
      <StyledList>
        {filteredProducts.map((product) => (
          <ListItem key={product._id}>
            <ProductItem
              id={product._id}
              img={product.image}
              name={product.productname}
              description={product.description}
              price={product.price}
              rating={product.rating}
              instock={product.countInStock}
            />
          </ListItem>
        ))}
      </StyledList>
    </ProductsContainer>
  );
};

export default Products;
