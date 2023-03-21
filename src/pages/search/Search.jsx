import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../../components/card/MovieCard";
import axios from "axios";

import { Title } from "./style";
import { DivInfo } from "../home/style";
import Loading from "../../components/loading/Loading";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [removeLoad, setRemoveLoad] = useState(true);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const queryUrl = `${searchURL}?${apiKey}&query=${query}`;

  const getSearchMovies = (url) => {
    setTimeout(() => {
      axios
        .get(url)
        .then((e) => {
          setMovieSearch(e.data.results);
          setRemoveLoad(false);
        })
        .catch((err) => {
          alert(err);
        });
    }, 1000);
  };

  useEffect(() => {
    getSearchMovies(queryUrl)
  }, [query]);

  return (
    <>
      {removeLoad ? (
        <Loading />
      ) : (
        <div>
          <Title>
            Resultados para:
            <span className="query-text"> {query}</span>
          </Title>

          <DivInfo>
            {movieSearch && movieSearch.length == 0 && (
              <p>Sem resultados, tente novamente...</p>
            )}
            {movieSearch &&
              movieSearch.length > 0 &&
              movieSearch.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </DivInfo>
        </div>
      )}
    </>
  );
};
