import { ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES } from "../actionTypes";

const initialState = [];

export const movieReducer = (state = initialState, { type, payload }) => {
  //logic
  //console.log(type);

  switch (type) {
    case GET_ALL_MOVIES:
      console.log("payload");
      //console.log(payload);
      //state.movies = payload;
      return payload;

    case ADD_MOVIE:
      // console.log("add movie");
      // console.log(state.results);
      let m = [...(state), { ...payload }]
      console.log(state);
      return m;

    case DELETE_MOVIE:
      console.log("Delete")
      //state = ;
      //console.log(state);
      console.log(payload);

      return state.map((movie) =>
        movie.id === payload.id ? state.splice(state.indexOf(movie), 0) : { ...movie }
      )
      /*console.log(state);

      return state;
*/
    default:
      return state;
  }
}