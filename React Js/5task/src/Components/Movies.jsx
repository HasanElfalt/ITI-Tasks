import { memo, useContext } from "react";
import Movie from "./Movie";
import SimpleBackdrop from "./BackDrop";
import { MovieContext } from "../Modules/MovieModule";

const Movies = () => {

    // const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    // const url = "https://api.themoviedb.org/3";
    // const path = "/discover/movie?sort_by=popularity.desc";
    // const apiUrl = url + path + apiKey;

    const { movies, deleteMovie } = useContext(MovieContext);

    if (!movies) return (<SimpleBackdrop></SimpleBackdrop>)

    return (
        <div>{movies.map((m) => <Movie key={m.id} id={m.id} original_title={m.original_title} overview={m.overview} poster_path={m.poster_path} deleteMovie={deleteMovie}></Movie>)}</div>
    );

};

export default memo(Movies);