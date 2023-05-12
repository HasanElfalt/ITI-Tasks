import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Modules/MovieModule";
import { useNavigate, useParams } from "react-router";

const DetailsPage = () => {

    let imgPath = "https://image.tmdb.org/t/p/w300/";

    const { movies } = useContext(MovieContext);
    const navigate = useNavigate();
    const movieId = useParams().id;
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {

        const movieDetail = movies.find((m) => {
            console.log(m.id, movieId)

            return m.id === movieId
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