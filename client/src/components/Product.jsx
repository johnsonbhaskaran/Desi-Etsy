import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  ${mobile({ minWidth: "100%", margin: "0px 0px 20px 0px" })}
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff8f3;
  border: 0.5px solid lightblue;
  position: relative;
`;

const Circle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #faeee5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
export default Product;
