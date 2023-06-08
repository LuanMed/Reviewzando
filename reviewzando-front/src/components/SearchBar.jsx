// import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import UpdateUserPage from "../contexts/UpdateUserPage";
// import FollowersContext from "../contexts/FollowersContext";
// import AuthContext from "../contexts/AuthContext";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(undefined);
  const navigate = useNavigate();
  // const [followers] = useContext(FollowersContext);
  // const [updateUserPage, setUpdateUserPage] = useContext(UpdateUserPage);
  // const { userData } = useContext(AuthContext);

  function searchUser(event) {
    const searchTerm = event.target.value;
    if (searchTerm.length < 3) return setResult(undefined);
    const resultSearch = axios.get(
      `${process.env.REACT_APP_API_URL}/users/${userData.id}/${searchTerm}`
    );
    resultSearch.then((res) => setResult(res.data));
    resultSearch.catch((err) => {
      console.log(err.response.data);
    });
  }

  //   function handleClick(id) {
  //     navigate(`/user/${id}`);
  //     setUpdateUserPage(!updateUserPage);
  //   }

  return (
    <ContainerSearchBar>
      <ContainerInput>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          id="test"
          type="text"
          placeholder="Procurar"
          value={search}
          onChange={searchUser}
          required
          data-test="search"
        />
        <AiOutlineSearch onClick={() => handleClick(result[0].id)} />
        {result?.length !== 0 ? (
          result?.map((r) => (
            <EachUser
              key={r.id}
              onClick={() => handleClick(r.id)}
              data-test="user-search"
            >
              <img src={r.picture_url} />
              <p>{r.username}</p>
              {followers.map((f) => {
                if (f.followed_id === r.id)
                  return (
                    <div key={f.followed_id}>
                      <RxDotFilled />
                      <span>following</span>
                    </div>
                  );
              })}
            </EachUser>
          ))
        ) : (
          <></>
        )}
      </ContainerInput>
    </ContainerSearchBar>
  );
}

const ContainerSearchBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -23px;
  margin-left: -282px;
  background-color: #444444;
  border-radius: 10px;
  @media (max-width: 1000px) {
    top: 120%;
    margin-top: 0;
    margin-left: -45vw;
    z-index: 8;
  }
`;

const ContainerInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #444444;
  border-radius: 10px;
  input {
    font-size: 19px;
    color: #ffffff;
    width: 564px;
    height: 46px;
    padding-left: 15px;
    border: 0px;
    border-radius: 10px;
    outline: none;
    &::placeholder {
      font-size: 19px;
      color: #aaaaaa;
    }
    @media (max-width: 1000px) {
      width: 90vw;
    }
  }
  svg {
    position: absolute;
    top: 10px;
    right: 1%;
    font-size: 25px;
    color: #c6c6c6;
  }
`;

const EachUser = styled.button`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #e7e7e7;
  border: none;
  cursor: pointer;
  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    font-size: 19px;
    color: #515151;
  }
  svg {
    position: static;
    font-size: 20px;
    color: #c5c5c5;
  }
  span {
    font-size: 19px;
    color: #c5c5c5;
  }
`;
