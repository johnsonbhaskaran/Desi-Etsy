import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  font-size: 18px;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 42px;
  ${mobile({ fontSize: "32px" })}
`;

const Top = styled.div`
  display: flex;
  padding: 30px;
  ${mobile({ padding: "15px 0px", alignItems: "stretch", flexWrap: "wrap" })}
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 15px;
  font-weight: 500;
  font-size: 20px;
  ${mobile({ fontSize: "14px", width: "46vw", order: 1, padding: "10px 0px", margin: "10px 0" })}
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  font-size: 20px;
  ${mobile({
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    order: 2,
    flex: 1,
    margin: "5px 0",
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  ${mobile({ margin: "0px" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexWrap: "wrap" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexWrap: "wrap" })}
`;

const Image = styled.img`
  width: 250px;
  ${mobile({ padding: "0 45px", margin: "0 auto" })}
`;

const Details = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px", fontSize: "18px", flex: 1 })}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 24px;
`;

const ProductName = styled.span`
  ${mobile({ order: 2, marginBottom: "5px" })};
`;

const ProductId = styled.span`
  ${mobile({ order: 2, marginBottom: "5px" })};
`;

const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  ${mobile({ order: 1, margin: "5px auto" })}
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  ${mobile({ order: 2 })};
`;

const PriceDetails = styled.span`
  flex: 1;
  ${mobile({ flexDirection: "row", justifyContent: "space-between" })}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ margin: "5px" })}
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 28px;
  margin: 5px;
  ${mobile({ fontSize: "24px" })}
`;

const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: 200;
  ${mobile({ fontSize: "24px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  height: 50vh;
  ${mobile({ margin: "15px 0", height: "100%", padding: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 36px;
  ${mobile({ fontSize: "24px" })}
  margin-bottom: 30px;
  ${mobile({ marginBottom: "15px" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  ${mobile({ margin: "10px 0" })}
  font-size: 26px;
  ${mobile({ fontSize: "20px" })}
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && 32}px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-weight: 600;
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
  background-color: black;
  color: white;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Whishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://www.campusshoes.com/cdn/shop/files/SNIPER_22G-1237_LGRY_BLK_02_720x.jpg?v=1757580144' />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 879564132189
                  </ProductId>
                  <ProductColor color='#8996A8' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://www.campusshoes.com/cdn/shop/files/CAMPPAUL_22G-179_S.GRN-M.BLU_1_720x.jpg?v=1755520928' />
                <Details>
                  <ProductName>
                    <b>Product:</b> CAMP PAUL Green Men's Running Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 879564132189
                  </ProductId>
                  <ProductColor color='#91C1BE' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimate Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.91</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.91</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;
