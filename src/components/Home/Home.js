import React, { useEffect } from 'react'
import MoviesListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Home = () => {

    const dispatch = useDispatch();

    // here below part is works as synchronous way first data will be fetched and than dispacthed
    // this is not wright way to handle asynchronouse actions so we will use asynchrounse redux middlware thunk
    const movietext = "harry";
    const showtext = "friends";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movietext));
        dispatch(fetchAsyncShows(showtext));
    }, [dispatch]);



    return (
        <>
            <div>
                <div className='banner-img'>
                    <MoviesListing />
                </div>
            </div>
        </>
    )
}

export default Home



