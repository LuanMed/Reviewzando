import styled from "styled-components";

export function Logo({ size }) {
  return <LogoStyle size={size}>ReviewZando</LogoStyle>;
}

const LogoStyle = styled.h1`
  font-size: ${(props) => (props.size ? `${props.size}px` : "65px")};
  color: #ffffff;
  font-family: "Caveat", cursive;
  text-align: center;

  @media (max-width: 800px) {
    font-size: ${(props) => (props.size ? `${props.size - 20}px` : "60px")};
  }
`;
