import styled from "styled-components";
import { popularProducts } from "../data.js";
import Product from "./Product";
import { mobile } from "../responsive.js";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ width: "100vw" })}
`;

const ProductList = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default ProductList;
