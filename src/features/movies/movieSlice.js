import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieapi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieapiKey';


const initialState = {
    movies: {},
    shows: {},
    selectMoviesOrShows: {},
};



export const fetchAsyncMovies = createAsyncThunk('movies/fectchAsyncMovies', async (term) => {

    const response = await movieapi.get(`?apiKey=${APIKey}&s=${term}&type=movie`).catch((err) => {
        console.log("Err :", err);
    });
    return response.data;


});
export const fetchAsyncShows = createAsyncThunk('shows/fectchAsyncShows', async (term) => {

    const response = await movieapi.get(`?apiKey=${APIKey}&s=${term}&type=series`).catch((err) => {
        console.log("Err :", err);
    });
    return response.data;
});
export const fetchAsyncShowsMoviesDetails = createAsyncThunk('selectMoviesOrShows/fectchAsyncShowsMoviesDetails', async (id) => {

    const response = await movieapi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`).catch((err) => {
        console.log("Err :", err);
    });
    return response.data;
});


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMoviesOrShow: (state) => {
            state.selectMoviesOrShows = {};
        },
    },


    extraReducers: {
        // this fecthcAsynchMovies will have action creattor which defines the asynch life cycle

        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched succesfful here");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: (state, { payload }) => {
            console.log("Fetched rejected here");

        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched succesfful here");
            return { ...state, shows: payload };
        },
        [fetchAsyncShowsMoviesDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched succesfful here for details");
            return { ...state, selectMoviesOrShows: payload };
        },
    }
});


export const { addMovies, removeSelectedMoviesOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedDetails = (state) => state.movies.selectMoviesOrShows;
export default movieSlice.reducer;

