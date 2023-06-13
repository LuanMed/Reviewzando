import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetUsers from "../hooks/api/useGetUsers";
import { useNavigate } from "react-router-dom";

export default function AsideMenu() {
  const [users, setUsers] = useState([]);
  const { getUsers } = useGetUsers();
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(getUsers);
  }, [getUsers]);

  return (
    <ContainerFriends>
      <p>Sugestões:</p>
      {users?.length !== 0 ? (
        users?.map((u) => (
          <Followed key={u.id}>
            <div onClick={() => navigate(`/user/${u.id}`)}>
              <img src={u.picture_url} />
              <p>{u.username}</p>
            </div>
            <span>follow</span>
          </Followed>
        ))
      ) : (
        <h3>Ainda não temos sugestões</h3>
      )}
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
  h3 {
    font-size: 15px;
    margin-top: 10px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Followed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    max-width: 70%;
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      border-radius: 50px;
    }
    p {
      margin: 0px;
      text-align: start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
  }

  span {
    color: #888888;
    cursor: pointer;
  }
`;
