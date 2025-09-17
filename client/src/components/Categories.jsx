import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};
export default Categories;
