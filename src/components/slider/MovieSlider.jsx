import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { Image, Info, Title, DivInfo } from "./style";

const imageUrl = import.meta.env.VITE_IMG;

const MovieSlider = ({ movie, showLink = true }) => {
  return (
    <Swiper
      breakpoints={{
        375: {
          width: 375,
          slidesPerView: 1.6,
        },
        768: {
          width: 768,
          slidesPerView: 3.4,
        },
        992: {
          width: 992,
          slidesPerView: 3.4,
        },
      }}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {movie &&
        movie.map((e) => (
          <SwiperSlide key={e.id}>
            <DivInfo>
              <Image
                src={e.poster_path !== null ? imageUrl + e.poster_path : ""}
                alt={e.title}
              />

              <Title>{e.title ? e.title : 'Sem título' }</Title>

              <Info>
                <FaStar /> {e.vote_average}
              </Info>

              {showLink && <Link to={`/movie/${e.id}`}>Detalhes</Link>}
            </DivInfo>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MovieSlider;
