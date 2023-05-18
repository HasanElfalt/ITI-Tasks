import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

const DetailsPage = () => {

    let imgPath = "https://image.tmdb.org/t/p/w300/";

    //const { movies } = useContext(MovieContext);
    const movies = useSelector((state)=>{/*console.log(state);*/ return state?state:undefined})
    console.log("Details");
    console.log(movies);

    const navigate = useNavigate();
    const movieId = useParams().id;
    console.log(movieId);
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {

        const movieDetail = movies.find((m) => {
            console.log(m.id, movieId)

            return m.id === +movieId
        });
        console.log(movieDetail)

        if (!movieDetail) navigate("/notFound")
        setMovieData(movieDetail)
    }, [movieId, movies, navigate])

    return (
        <div>
            movieId:   {movieId}
            <br></br>
            movie title :{movieData?.original_title}
            <br></br>
            movie overview :{movieData?.overview}
            <br></br>
            movie Poster :<img src={imgPath.concat(movieData?.poster_path)} alt="movie poster" />
        </div>
    );
};

export default DetailsPage;