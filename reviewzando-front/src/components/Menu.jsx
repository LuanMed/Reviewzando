import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/AuthContext";
import { AiOutlinePlus } from "react-icons/ai";

export default function Menu() {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const {
    userData: { user },
  } = useContext(UserContext);

  return (
    <ContainerLogout>
      <AddButton onClick={() => navigate("/new-review")}>
        <AiOutlinePlus />
      </AddButton>
      <ContainerImage>
        <img
          onClick={() => {
            if (showLogout) setShowLogout(false);
            else setShowLogout(true);
          }}
          src={user.picture_url}
          data-test="avatar"
        />
      </ContainerImage>
      <LogOutBar data-test="menu" showLogout={showLogout}>
        <Link to={"/home"}>Início</Link>
        <Link>
          Suas
          <br />
          análises
        </Link>
        <a
          data-test="logout"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Sair
        </a>
      </LogOutBar>
    </ContainerLogout>
  );
}

const ContainerLogout = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    width: 49px;
    height: 49px;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  background-color: #444444;
  border: 0px;
  padding: 0;
  cursor: pointer;
  svg {
    font-size: 30px;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 72px;
  background-color: #444444;
  z-index: 10;
`;

const LogOutBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: ${(props) => (props.showLogout ? "71px" : "-78px")};
  right: 0;
  border-radius: 0 0 0 20px;
  background-color: #444444;
  width: 115px;
  height: 150px;
  padding-top: 10px;
  z-index: 9;
  cursor: pointer;
  transition: top 1s ease-in-out;
  a {
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    z-index: 7;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;
