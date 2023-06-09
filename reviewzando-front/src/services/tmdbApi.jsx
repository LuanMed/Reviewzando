// import axios from "axios";

// export default function getMoviesFromTmbdApi() {
//   const token = import.meta.env.VITE_TMDB_TOKEN;
//   const options = {
//     method: "GET",
//     url: "https://api.themoviedb.org/3/movie/popular?language=pt&page=2&page=1",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

import axios from "axios";

export default function getMoviesFromTmdbApi() {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  let allMovies = [];

  const fetchMovies = async (page) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=pt&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(options);
      allMovies = allMovies.concat(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllMovies = async () => {
    for (let page = 1; page <= 10; page++) {
      await fetchMovies(page);
    }
    return allMovies;
  };

  return fetchAllMovies();
}
