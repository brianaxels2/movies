import { useState, useEffect } from "react";
import MovieCard from "../../components/card/MovieCard";
import MovieSlider from "../../components/slider/MovieSlider";
import axios from "axios";

import { Title, DivInfo } from "./style";
import Loading from "../../components/loading/Loading";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const shortly = import.meta.env.VITE_EM_BREVE;

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topShortly, setTopShortly] = useState([]);
  const [removeLoad, setRemoveLoad] = useState(true);

  const baseUrlTopMovies = `${moviesUrl}top_rated?${apiKey}`;
  const baseUrlShortly = `${shortly}?${apiKey}`;

  const topRateMovies = (url) => {
    setInterval(() => {
      axios
        .get(url)
        .then((e) => {
          setTopMovies(e.data.results);
          setRemoveLoad(false);
        })
        .catch((err) => {
          alert(err);
        });
    }, 1000);
  };

  const handleShortly = (url) => {
    axios
      .get(url)
      .then((e) => {
        setTopShortly(e.data.results);
        setRemoveLoad(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    topRateMovies(baseUrlTopMovies);
    handleShortly(baseUrlShortly);
  }, []);

  return (
    <>
      {removeLoad ? (
        <Loading />
      ) : (
        <div>
          <Title>Lançamentos:</Title>

          <MovieSlider movie={topShortly} />

          <Title>Melhores avaliações:</Title>

          <DivInfo>
            {topMovies &&
              topMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </DivInfo>
        </div>
      )}
    </>
  );
};
