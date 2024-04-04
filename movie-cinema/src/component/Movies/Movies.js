import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList } from "../../api.js";

const Movies = () => {
  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    };
    setDatas([...datas, movie]);
    // setNama("Budi");
  };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // menangkap data result api
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, [getMovieList]);

  // console.log(datas);

  return (
    <div>
      <h2>Latest Movies</h2>
      <div class="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
        {/* <button onClick={handleClick}>Add Movie</button> */}
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
