import { memo } from "react";
import Movie from "./Movie";
import SimpleBackdrop from "./BackDrop";
import { useSelector } from "react-redux";

const Movies = () => {

    const movies = useSelector((state)=>{/*console.log(state);*/ return state?state:undefined});
    console.log(movies);
    if (!movies) return (<SimpleBackdrop></SimpleBackdrop>)

    return (
        <div>{movies.map((m) => <Movie key={m.id} id={m.id} original_title={m.original_title} overview={m.overview} poster_path={m.poster_path} /*deleteMovie={deleteMovie}*/></Movie>)}</div>
    );

};

export default memo(Movies);