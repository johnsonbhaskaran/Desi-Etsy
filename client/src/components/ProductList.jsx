import styled from "styled-components";
import { popularProducts } from "../data.js";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
`;

const ProductList = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};
export default ProductList;
