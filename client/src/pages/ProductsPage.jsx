import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  ${mobile({ fontSize: "32px", margin: "10px 20px" })}
  font-size: 48px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    justifyContent: "start",
    margin: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "self-start",
    flexWrap: "nowrap",
  })}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterText = styled.p`
  ${mobile({ fontSize: "20px", marginBottom: "10px" })}
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ fontSize: "14px", width: "100%", marginBottom: "10px" })}
  font-size: 18px;
`;
const Option = styled.option`
  font-size: 18px;
`;

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(cat);
  console.log(filters);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select id='select-color' name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>orange</Option>
            <Option>maroon</Option>
          </Select>
          <Select id='select-size' name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select id='sort-products' onChange={handleSort}>
            <Option value='newest'>Newest</Option>
            <Option value='trending'>Trending</Option>
            <Option value='discounted'>Discounted</Option>
            <Option value='ascPrice'>Price (asc)</Option>
            <Option value='descPrice'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductsPage;
