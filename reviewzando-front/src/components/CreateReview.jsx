import styled from "styled-components";
import { GiClapperboard } from "react-icons/gi";

export default function CreateReview() {
  return (
    <>
      <ContainerReview>
        <ContainerPoster>
          <GiClapperboard />
        </ContainerPoster>
      </ContainerReview>
    </>
  );
}

const ContainerReview = styled.div`
  background-color: #444444;
  border-radius: 8px;
  width: 40vw;
  height: 40vw;
  margin-top: 50px;
`;

const ContainerPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 30%;
  height: 40%;
  border-radius: 8px;
  svg {
    color: rgba(0, 0, 0, 0.3);
    font-size: 700%;
  }
`;
