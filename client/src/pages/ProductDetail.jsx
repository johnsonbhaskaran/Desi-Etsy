import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 200;
`;

const Descp = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 32px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 10px;
  margin-left: 10px;
  font-size: 18px;
`;

const FilterSizeOption = styled.option`
  font-size: 18px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid teal;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

const Button = styled.button`
  padding: 20px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ProductDetail = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Descp>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, rem provident
            voluptate ut tempore dignissimos odit tempora laudantium ipsum? Totam odit fugiat hic.
          </Descp>
          <Price>₹ 1850</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductDetail;
