import styled from "styled-components";
import Send from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  background-color: #f5fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Descp = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 35%;
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
