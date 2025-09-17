import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

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
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select id='select-color'>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Orange</Option>
            <Option>Maroon</Option>
          </Select>
          <Select id='select-size'>
            <Option disabled selected>
              Size
            </Option>
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
          <Select id='sort-products'>
            <Option selected>Newest</Option>
            <Option>Trending</Option>
            <Option>Discounted</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductsPage;
