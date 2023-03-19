import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Card, Image, Info, Title } from "./styles";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <Card>
        <Image
          src={movie.poster_path !== null ? imageUrl + movie.poster_path : ""}
          alt={movie.title}
        />
        <Title>{movie.title}</Title>
        <Info>
          <FaStar /> {movie.vote_average}
        </Info>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </Card>
  );
};

export default MovieCard;
