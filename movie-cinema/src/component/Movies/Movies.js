import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = () => {
  const datas = [
    {
      title: "Judul film 1",
      year: 2012,
      genre: "Comedy",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 2",
      year: 2022,
      genre: "Horror",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 3",
      year: 2024,
      genre: "Romance",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 4",
      year: 2009,
      genre: "Action",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 5",
      year: 2017,
      genre: "Thriller",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 6",
      year: 2018,
      genre: "Fantasy",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 7",
      year: 2020,
      genre: "Action",
      poster: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div>
      <h2>Latest Movies</h2>
      <div class="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
