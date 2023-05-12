import { PureComponent } from "react";
import axios from "axios";
import Movie from "./Movie";

class Movies extends PureComponent {

    apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    url = "https://api.themoviedb.org/3";
    path = "/discover/movie?sort_by=popularity.desc";
    apiUrl = this.url + this.path + this.apiKey;

    constructor(){
        super();
        this.state= {movies: null};
    }

    render(){

        if(!this.state.movies) return(<div>Loading...</div>)

        return (
            <div>{this.state.movies.map((m)=><Movie key={m.id} {...m}></Movie>)}</div>
        );
    }

    componentDidMount(){
        //console.log(this.apiUrl);

        axios.get(this.apiUrl)
        .then ((res)=>{
            console.log(res.data.results);
            this.setState({movies:res.data.results})})
        
        //console.log(this.state.movies);
    }
};

export default Movies;