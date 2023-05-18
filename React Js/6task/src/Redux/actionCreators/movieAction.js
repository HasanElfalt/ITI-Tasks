import { ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES } from "../actionTypes";

export const getAllMovies=(data)=>({
    type:GET_ALL_MOVIES, 
    payload:data
});

export const addMovie=(movieData)=>({
    type:ADD_MOVIE,
    payload:movieData
});

export const deleteMovie=(movieData)=>({
    type:DELETE_MOVIE,
    payload:movieData
});