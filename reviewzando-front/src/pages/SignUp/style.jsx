import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  margin-top: 50px;
  gap: 10px;

  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 65px;
  padding-left: 15px;
  font-family: "Raleway";
  font-size: 20px;
  color: #000000;
  background: #ffffff;
  border: 0px solid;
  border-radius: 10px;
  ::placeholder {
    font-family: "Raleway";
    font-size: 20px;
    color: #aaaaaa;
  }
`;

export const Button = styled.button`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  height: 65px;
  color: #ffffff;
  background-color: #c81300;
  border-radius: 10px;
`;

export const LinkTo = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #aaaaaa;
`;
