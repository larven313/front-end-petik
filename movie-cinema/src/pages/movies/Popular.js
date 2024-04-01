import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../../api";
import Navbar from "../../component/Navbar/Navbar";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isNotif, setIsNotif] = useState(false);

  useEffect(() => {
    // menangkap data result api
    // setPopularMovies(getMovieList());
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const notif = () => {
    setIsNotif(!isNotif);

    setTimeout(() => {
      setIsNotif((state) => !state);
    }, 2000);
  };

  console.log({ isNotif });

  return (
    <div
      style={{
        padding: -10,
        marginTop: -50,
        marginBottom: -50,
        marginLeft: -100,
        marginRight: -98,
      }}
    >
      <Navbar />
      <div className="Movie-wrapper">
        <div className="Movie-title">tes</div>
        <img
          className="Movie-image"
          src={`https://image.tmdb.org/t/p/w500`}
          alt="gambar"
        />
        <div className="Move-date">release : release</div>
        <div className="Movie-rate">vote</div>
      </div>
    </div>
  );
};

export default Popular;
