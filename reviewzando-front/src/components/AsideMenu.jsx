import styled from "styled-components";

export default function AsideMenu() {
  return (
    <ContainerFriends>
      <p>Sugestões:</p>
      <Followed>
        <img src="https://images2.alphacoders.com/495/495160.png" />
        <p>michelle</p>
        <span>follow</span>
      </Followed>
      <Followed>
        <img src="https://images2.alphacoders.com/495/495160.png" />
        <p>michelle</p>
        <span>follow</span>
      </Followed>
      <Followed>
        <img src="https://images2.alphacoders.com/495/495160.png" />
        <p>michellenogueiraalves</p>
        <span>follow</span>
      </Followed>
    </ContainerFriends>
  );
}

const ContainerFriends = styled.aside`
  position: fixed;
  right: 27vw;
  top: 20vh;
  background-color: #444444;
  width: 15vw;
  height: 40vh;
  padding: 10px;
  border-radius: 8px;
  overflow-y: auto;
  z-index: 1;
  p {
    font-size: 15px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Followed = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50px;
  }
  p {
    margin: 0px;
    margin-right: 15%;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50%;
  }
  span {
    color: #888888;
    cursor: pointer;
  }
`;
