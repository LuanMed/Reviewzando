import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

export default function SearchMovieBar() {
  const [movieName, setMovieName] = useState("");
  return (
    <>
      <MovieName
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Nome do filme"
      />
    </>
  );
}

const MovieName = styled(DebounceInput)`
  font-size: 16px;
  width: 100%;
  height: 5vh;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 5px;
  outline: none;
`;
