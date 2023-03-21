import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/card/MovieCard";
import axios from "axios";

import { Card, Divinfo, Info, Tagline, Title } from "./styles";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import Loading from "../../components/loading/Loading";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [removeLoad, setRemoveLoad] = useState(true);

  const { id } = useParams();

  const getMovie = (url) => {
    setTimeout(() => {
      axios
        .get(url)
        .then((e) => {
          setMovie(e.data);
          setRemoveLoad(false);
        })
        .catch((err) => {
          alert(err);
        });
    }, 1000);
  };

  useEffect(() => {
    const url = `${moviesUrl}${id}?${apiKey}`;
    getMovie(url);
  }, []);

  return (
    <>
      {removeLoad ? (
        <Loading />
      ) : (
        <Card>
          {movie && (
            <>
              <MovieCard movie={movie} showLink={false} />

              <Tagline>{movie.tagline}</Tagline>
              <Divinfo>
                <Title>
                  <BsWallet2 /> Budget
                </Title>
                <Info>{movie.budget}</Info>
              </Divinfo>
              <Divinfo>
                <Title>
                  <BsGraphUp /> Revenue:
                </Title>
                <Info>{movie.revenue}</Info>
              </Divinfo>
              <Divinfo>
                <Title>
                  <BsHourglassSplit /> Runtime
                </Title>
                <Info>{movie.runtime} minutes</Info>
              </Divinfo>
              <Divinfo>
                <Title>
                  <BsFillFileEarmarkTextFill /> Description
                </Title>
                <Info>{movie.overview}</Info>
              </Divinfo>
            </>
          )}
        </Card>
      )}
    </>
  );
};
