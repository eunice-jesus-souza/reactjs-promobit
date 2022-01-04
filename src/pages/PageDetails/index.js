import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { get_MovieDatails } from "../../api/get_Api";

export default function PageDetails() {
  const [movieDetails, set_movieDetails] = useState([]);

  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    await get_MovieDatails();
  };

  const renderMovieList = () => {
    return movieDetails.map((film) => {
      return (
        <div key={film.id}>
          <span>
            <strong>Id: </strong>
            {film.id}
          </span>
          <p>
            <strong>Title:</strong>
            {film.original_title}
          </p>
          {/* <span><strong>Language:</strong> {film.original_language}</span>
                    <span><strong>Description:</strong> {film.overview}</span>
                    <span><strong>Popularity:</strong> {film.popularity}</span>
                    <span><strong>Rating:</strong> {film.vote_average}</span>
                    <button onClick={() => {goToDetails(history, film.id)}}>Ver detalhes</button> */}
        </div>
      );
    });
  };

  return (
    <div>
      PageDetails
      {renderMovieList()}
    </div>
  );
}
