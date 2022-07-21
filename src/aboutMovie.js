import { Component, useEffect, useState } from 'react';
import { useLocation, Link, useParams } from "react-router-dom";
import axios from 'axios';


function AboutMovie() {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    const getMovie = async () => {
        try {
            var response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b155180e`);
            setMovie(response.data);
            console.log(movie);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMovie();
    }, []);


    return (
        <div className='description2'>
            <h1>{movie.Title}</h1>
            <img className='image2' src={movie.Poster} alt="display image"></img>
            <div>
                <div >Movie Year : {movie['Year']}</div>
                <div >Movie Released : {movie['Released']}</div>
                <div >Movie Rated : {movie['Rated']}</div>
                <div >Movie Runtime : {movie['Runtime']}</div>
                <div >Movie Genre : {movie['Genre']}</div>
                <div >Movie Director : {movie['Director']}</div>
                <div >Movie Writer : {movie['Writer']}</div>
                <div >Movie Actors : {movie['Actors']}</div>
                <div >Movie Country : {movie['Country']}</div>
                <div >Movie Language : {movie['Language']}</div>
                <div>Movie Awards : {movie['Awards']}</div>
                <div >Movie Plot : {movie['Plot']}</div>
            </div>
        </div>
    )
}

export default AboutMovie;