import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailMovie() {
  const API_KEY = "8e465ff28280979967a70c1462d19f7f";
  const params = useParams();
  const [movie, setMovie] = useState("");

  async function fetchDetailMovie() {
    // Lakukan fetch detail movie
    const URL = `
    https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  useEffect(() => {
    fetchDetailMovie();
  }, [params.id]);

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://youtube.com/watch?v=${movie.videos.results[0].key}`;
  return (
    <div className="detail">
      <h2>{movie.title}</h2>
      <h3>{genres}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt=""
      />
      <p>{movie.overview}</p>
      <button as="a" href={trailer}>
        Watch
      </button>
    </div>
  );
}

export default DetailMovie;
