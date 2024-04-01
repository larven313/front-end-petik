import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailMovie from "../../component/DetailMovie/DetailMovie.js";
import Movies from "../../component/Movies/Movies.js";

function RecomMovie() {
  const params = useParams();
  const API_KEY = "8e465ff28280979967a70c1462d19f7f";
  const [movies, setMovies] = useState([]);

  async function fetchRecom() {
    const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchRecom();
  }, [params.id]);
  return (
    <Movies
      movies={movies}
      setMovies={setMovies}
      title="Recomendation Movies"
    />
  );
}

function Detail() {
  return (
    <div>
      <DetailMovie />
      {/* <RecomMovie /> */}
    </div>
  );
}
export default Detail;
