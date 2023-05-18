import axios from 'axios';
import { createContext, lazy, useEffect, useMemo } from 'react';
import { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { getAllMovies } from '../Redux/actionCreators/movieAction';

const MoviesPage = lazy(() => import("../Pages/MoviesPage"));
const DetailsPage = lazy(() => import("../Pages/DetailsPage"));
const AddMoviePage = lazy(() => import("../Pages/AddMoviePage"));
const NotFound = lazy(() => import("../Pages/NotFoundPage"));

export const MovieContext = createContext();

const MoviesModule = () => {

  const dispatch = useDispatch();

  let apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
  let url = "https://api.themoviedb.org/3";
  let path = "/discover/movie?sort_by=popularity.desc";
  //let imgPath = "https://image.tmdb.org/t/p/w300/";
  let apiUrl = url + path + apiKey;

  const [movies, setMovies] = useState([
   /* { id: uuid(), original_title: "Ant-Man and the Wasp: Quantumania", overview: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.", poster_path: imgPath + "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg" },
    { id: uuid(), original_title: "Guardians of the Galaxy Volume 3", overview: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", poster_path: imgPath + "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
    { id: uuid(), original_title: "The Super Mario Bros. Movie", overview: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.", poster_path: imgPath + "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" },
    { id: uuid(), original_title: "Avatar: The Way of Water", overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.", poster_path: imgPath + "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
    { id: uuid(), original_title: "Fast X", overview: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.", poster_path: imgPath + "/1E5baAaEse26fej7uHcjOgEE2t2.jpg" },
  */]);


  const addMovie = useCallback((data) => {

    setMovies((oldUsers) => [
      ...oldUsers,
      { ...data },
    ]);
  }, []);
/*
  const deleteMovie = useCallback((movieId) => {
    setMovies((oldMovies) =>
      oldMovies.map((movie) =>
        movie.id === movieId ? oldMovies.splice(oldMovies.indexOf(movie), 0) : { ...movie }
      )
    );
  }, []);*/

  useEffect(()=>{
    axios.get(apiUrl)
        .then ((res)=>{
            //console.log(res.data.results);
            dispatch(getAllMovies(res.data.results));
            //this.setState({movies:res.data.results})
          })
  }, [apiUrl, dispatch]);

  const valuee = useMemo(() => ({ movies, addMovie/*, deleteMovie*/ }), [movies, addMovie/*, deleteMovie*/]);
  return (
    <MovieContext.Provider value={valuee}>
      <Routes>
        <Route index element={<MoviesPage></MoviesPage>}></Route>

        <Route path="add" element={<AddMoviePage></AddMoviePage>}></Route>
        <Route path=":id" element={<DetailsPage></DetailsPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </MovieContext.Provider>
  );
};

export default MoviesModule;