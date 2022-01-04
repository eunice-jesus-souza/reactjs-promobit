import { get_MoviesPopular } from "../../api/get_Api";
import { useEffect, useState } from "react";
import { StyledCard, StyledPageHome } from "./style";
import { goToDetails } from "../../router/routerGps";
import { useHistory } from "react-router-dom";

export default function PageHome() {
  const history = useHistory();
  const [movieList, set_movieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    set_movieList(await get_MoviesPopular());
  };

  const renderMovieList = () => {
    return movieList.map((film) => {
      return (
        <StyledCard key={film.id}>
          <span>
            <strong>Id: </strong>
            {film.id}
          </span>
          <p>
            <strong>Title:</strong>
            {film.original_title}
          </p>
          <span>
            <strong>Language:</strong> {film.original_language}
          </span>
          <span>
            <strong>Description:</strong> {film.overview}
          </span>
          <span>
            <strong>Popularity:</strong> {film.popularity}
          </span>
          <span>
            <strong>Rating:</strong> {film.vote_average}
          </span>
          <button
            onClick={() => {
              goToDetails(history, film.id);
            }}
          >
            Ver detalhes
          </button>
        </StyledCard>
      );
    });
  };

  return (
    <div>
      PageHome
      <StyledPageHome>
        <div>{renderMovieList()}</div>
      </StyledPageHome>
    </div>
  );
}
