import { useState } from "react";
import Movie from "./Movie";
import {v4 as uuid} from 'uuid';

const Movies = ()=>{

    const [moviesArr] = useState([
        {id: uuid(), name: "Frozen", type: "anime"},
        {id: uuid(), name: "inside out", type: "cartoon"},
        {id: uuid(), name: "Bilal", type: "History"},
        {id: uuid(), name: "Intersteller", type: "science fiction"},
        {id: uuid(), name: "Sherlock", type: "Action"},
    ]);
    return (
        <div>{moviesArr.map((m)=><Movie key={m.id} {...m}></Movie>)}</div>
    );
};

export default Movies;