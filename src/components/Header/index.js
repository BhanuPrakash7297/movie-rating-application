import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png';
import './header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();

        if (term === "") alert("Please enter search term here");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        console.log(term);
        setTerm("");
    }


    return (
        <div className='header'>

            <div className='logo'>
                <Link to="/">Movies app</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type='text' value={term} placeholder='Search Movies and Shows'
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}>

                    </input>
                    <button type='submit'><i className='fa fa-search'>search</i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>

    )
}

export default Header


