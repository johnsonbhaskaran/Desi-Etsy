import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </Container>
  );
};
export default Categories;
