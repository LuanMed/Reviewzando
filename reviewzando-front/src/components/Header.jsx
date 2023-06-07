import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

export function Header() {
  return (
    <ContainerHeader>
      <Link to={"/home"}>
        <Logo size={50} />
      </Link>
      <SearchBar />
      <Menu />
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 72px;
  padding: 0px 0px 0px 20px;
  background-color: #444444;
`;
