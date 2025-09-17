import styled from "styled-components";
import Send from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  ${mobile({ height: "45vh" })}
  height: 60vh;
  background-color: #f5fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  ${mobile({ fontSize: "50px" })}
  font-size: 70px;
  margin-bottom: 20px;
`;

const Descp = styled.div`
  ${mobile({ fontSize: "20px", padding: "0px 20px" })}
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 35%;
  ${mobile({ width: "90%" })}
  height: 48px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  font-size: 18px;
  padding: 0px 15px;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: wheat;
  min-width: 60px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Descp>Get timely updates from your favorite products.</Descp>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
