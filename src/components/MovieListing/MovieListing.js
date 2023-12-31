import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
// import { render } from '@testing-library/react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Slider from "react-slick";
import './index.scss';

import { settings } from '../../common/setting'
const MoviesListing = () => {


    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    console.log("shows", shows);
    let renderMovies = "";
    let renderShows = "";
    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MoviesCard key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((show, index) => (
                <MoviesCard key={index} data={show} />
            ))
        ) : (
            <div className="shows-error">
                <h3>{shows.Error}</h3>
            </div>
        );

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'><Slider {...settings}>{renderMovies}</Slider></div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'><Slider {...settings}>{renderShows}</Slider></div>
            </div>
        </div>
    );

}

export default MoviesListing;
