import styled from "styled-components";
import { GiClapperboard } from "react-icons/gi";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import getMoviesFromTmdbApi from "../services/tmdbApi";
import usePostReview from "../hooks/api/usePostReview";
import { useNavigate } from "react-router-dom";

export default function CreateReview() {
  const [movieName, setMovieName] = useState("");
  const [result, setResult] = useState(undefined);
  const [plotScore, setPlotScore] = useState(2.5);
  const [flowScore, setFlowScore] = useState(2.5);
  const [outcomeScore, setOutcomeScore] = useState(2.5);
  const [description, setDescription] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [showList, setShowList] = useState(false);
  const { reviewAct } = usePostReview();
  const navigate = useNavigate();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  async function searchMovie(event) {
    const searchMovieName = event.target.value;
    setShowList(true);
    if (searchMovieName.length < 3) {
      setShowList(false);
      setSelectedMovie(undefined);
      setResult(undefined);
      return;
    }
    const moviesList = await getMoviesFromTmdbApi();
    const filteredMovies = moviesList?.filter((movie) => {
      const title = movie.title.toLowerCase();
      const searchChars = searchMovieName.toLowerCase();
      return title.includes(searchChars);
    });
    setResult(filteredMovies);
  }

  function selectMovie(movie) {
    setSelectedMovie(movie);
    setMovieName(movie.title);
    setShowList(false);
  }

  async function submit(event) {
    event.preventDefault();
    if (!selectedMovie) return;
    const poster = `${imagePath}${selectedMovie.poster_path}`;

    try {
      await reviewAct({
        title: movieName,
        description,
        poster,
        plotScore: Number(plotScore),
        flowScore: Number(flowScore),
        outcomeScore: Number(outcomeScore),
      });
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Form onSubmit={submit}>
        <ContainerReview>
          <ContainerPoster>
            {selectedMovie ? (
              <img src={`${imagePath}${selectedMovie.poster_path}`} />
            ) : (
              <GiClapperboard />
            )}
          </ContainerPoster>
          <ContainerMovieName>
            <MovieName
              minLength={3}
              debounceTimeout={300}
              value={movieName}
              onChange={searchMovie}
              required
              placeholder="Nome do filme"
              autoComplete="off"
            />
            <ContainerMovieList className={showList ? "visible" : ""}>
              {result === undefined ? (
                <p>loading</p>
              ) : (
                result?.map((r) => (
                  <p key={r.id} onClick={() => selectMovie(r)}>
                    {r.title}
                  </p>
                ))
              )}
            </ContainerMovieList>
          </ContainerMovieName>
          <RatingLabel>
            <strong>Enredo:</strong>
            <RatingInput
              className="rating"
              max="5"
              step="0.5"
              type="range"
              value={plotScore}
              onChange={(e) => setPlotScore(e.target.value)}
              onInput={(e) => {
                e.target.style.setProperty(
                  "--value",
                  `${e.target.valueAsNumber}`
                );
              }}
            />
          </RatingLabel>
          <RatingLabel>
            <strong>Flow:</strong>
            <RatingInput
              className="rating"
              max="5"
              step="0.5"
              type="range"
              value={flowScore}
              onChange={(e) => setFlowScore(e.target.value)}
              onInput={(e) => {
                e.target.style.setProperty(
                  "--value",
                  `${e.target.valueAsNumber}`
                );
              }}
            />
          </RatingLabel>
          <RatingLabel>
            <strong>Desfecho:</strong>
            <RatingInput
              className="rating"
              max="5"
              step="0.5"
              type="range"
              value={outcomeScore}
              onChange={(e) => setOutcomeScore(e.target.value)}
              onInput={(e) => {
                e.target.style.setProperty(
                  "--value",
                  `${e.target.valueAsNumber}`
                );
              }}
            />
          </RatingLabel>
          <Description
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Análise"
            autoComplete="off"
            required
          />
          <ContainerButton>
            <button type="submit">Salvar</button>
          </ContainerButton>
        </ContainerReview>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContainerReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #444444;
  border-radius: 8px;
  width: 40vw;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    margin-top: 150px;
    width: 90vw;
  }
`;

const ContainerPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 30%;
  height: 33vh;
  border-radius: 8px;
  margin-bottom: 15px;
  img {
    width: 101%;
    height: 101%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 1) 0 5px 10px;
  }
  svg {
    color: rgba(0, 0, 0, 0.3);
    font-size: 700%;
  }
  @media (max-width: 1000px) {
    width: 50%;
  }
`;

const ContainerMovieName = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const MovieName = styled(DebounceInput)`
  font-size: 16px;
  width: 100%;
  height: 5vh;

  padding-left: 5px;
  border: 0px;
  border-radius: 5px;
  outline: none;
`;

const ContainerMovieList = styled.div`
  position: absolute;
  width: 100%;
  max-height: 30vh;
  background-color: #777777;
  border-radius: 5px;
  overflow: auto;
  z-index: 1;
  p {
    padding: 5px;
    cursor: pointer;
    :hover {
      background-color: #666666;
    }
  }
  max-height: 0;
  transition: max-height 0s ease;

  &.visible {
    max-height: 30vh;
    transition: max-height 0.5s ease;
  }
`;

const RatingLabel = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const RatingInput = styled.input`
  --dir: right;
  --fill: gold;
  --fillbg: rgba(100, 100, 100, 0.3);
  --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
  --stars: 5;
  --starsize: 30px;
  --symbol: var(--star);
  --value: 2.5;
  --w: calc(var(--stars) * var(--starsize));
  --x: calc(100% * (var(--value) / var(--stars)));
  block-size: var(--starsize);
  inline-size: var(--w);
  position: relative;
  touch-action: manipulation;
  appearance: none;

  &::-moz-range-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
    -webkit-mask: repeat left center/var(--starsize) var(--symbol);
  }

  &::-moz-range-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
  }

  &::-webkit-slider-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
    -webkit-appearance: none;
  }
`;

const Description = styled.textarea`
  resize: none;
  font-size: 16px;
  width: 100%;
  height: 20vh;
  line-break: 20vh;
  margin-top: 10px;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  text-align: start;
  outline: none;
  vertical-align: top;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -10px;
  button {
    height: 30px;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
