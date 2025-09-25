import styled from "styled-components";
import { publicRequest } from "../requestMethods.js";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux.js";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 48px;
  ${mobile({ fontSize: "32px" })}
  font-weight: 200;
`;

const Descp = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "32px" })}
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  ${mobile({ fontSize: "18px", margin: "10px 0px" })}
  ${mobile({ width: "100%" })}
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 32px;
  ${mobile({ fontSize: "20px" })}
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.5px solid gray;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  ${mobile({ fontSize: "32px", margin: "0px 5px", width: "20px", height: "20px" })}
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
  ${mobile({ width: "100%" })}
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
  ${mobile({ padding: "15px" })}

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, [id]);

  const handleCartClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  console.log(color, size);

  return (
    <Container>
      <Annoucement className='text-sm' />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Descp>{product.description}</Descp>
          <Price>₹ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => setQuantity((p) => (p == 1 ? p : p - 1))} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity((p) => (p == 10 ? p : p + 1))} />
            </AmountContainer>
            <Button onClick={handleCartClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductDetail;
