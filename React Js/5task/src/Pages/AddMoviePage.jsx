import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { MovieContext } from '../Modules/MovieModule';
import { v4 as uuid } from "uuid";


const AddMoviePage = () => {
    let imgPath = "https://image.tmdb.org/t/p/w300/";

    const { addMovie } = useContext(MovieContext)
    const navigate = useNavigate();
    // console.log(props)
    // const {addUser} =props;
    const [movie, setMovie] = useState({id:uuid(), original_title: "test movie", overview: "lorem", poster_path: imgPath + "/1E5baAaEse26fej7uHcjOgEE2t2.jpg" });
    const inpRef = useRef(null);
    console.log(inpRef.current);

    const handleSubmit = (event) => {
        event.preventDefault();
        addMovie(movie);
        setMovie({ original_title: "", overview: "", poster_path: "" })

        navigate("/movies")
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value })  //computedproperty
        // console.log(e.target.name)
    }

    useEffect(() => {
        inpRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label>movie_title : </label><input ref={inpRef} name='original_title' type='text' value={movie.original_title} onChange={handleChange}></input>
            <br /><br />
            <label>movie_overview : </label><input name='overview' type='text' value={movie.overview} onChange={handleChange}></input>
            <br />
            <br />
            <label>movie_poster : </label><input name='poster_path' type='text' value={movie.poster_path} onChange={handleChange}></input>
            <br />
            <br />
            <input type='submit' value="add Movie"></input>
        </form>
    );
};

export default AddMoviePage;