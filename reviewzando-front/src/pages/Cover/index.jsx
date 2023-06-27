import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { useNavigate } from "react-router-dom";

export default function Cover() {
  const navigate = useNavigate();

  return (
    <>
      <Logo size={90} />
      <ContainerButton>
        <button onClick={() => navigate("/signin")}>Entrar</button>
        <button onClick={() => navigate("/signup")}> Cadastrar</button>
      </ContainerButton>
    </>
  );
}

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  button {
    width: 150px;

    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    height: 65px;
    color: #ffffff;
    background-color: #c81300;
    border: 0px;
    border-radius: 10px;
    :hover {
      background-color: #eb1700;
      transform: translateY(-2px);
    }
    :active {
      box-shadow: none;
      transform: translateY(0);
      background-color: #c81300;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
