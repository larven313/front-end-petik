import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList, searchMovie } from "../../api";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const [nama, setNama] = useState("Ucup");
  const [datas, setDatas] = useState([]);
  console.log(nama);

  // const [datas, setDatas] = useState([
  //   {
  //     title: "Judul film 1",
  //     year: 2012,
  //     genre: "Comedy",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 2",
  //     year: 2022,
  //     genre: "Horror",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 3",
  //     year: 2024,
  //     genre: "Romance",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 4",
  //     year: 2009,
  //     genre: "Action",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 5",
  //     year: 2017,
  //     genre: "Thriller",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 6",
  //     year: 2018,
  //     genre: "Fantasy",
  //     poster: "https://picsum.photos/200/300",
  //   },
  //   {
  //     title: "Judul film 7",
  //     year: 2020,
  //     genre: "Action",
  //     poster: "https://picsum.photos/200/300",
  //   },
  // ]);

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

  console.log(datas);

  useEffect(() => {
    // menangkap data result api
    // setDatas(getMovieList());
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Latest Movies</h2>
      <div class="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              key={index}
              id={data.id}
              title={data.title}
              year={data.release_date}
              genre={data.genre}
              poster={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
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
