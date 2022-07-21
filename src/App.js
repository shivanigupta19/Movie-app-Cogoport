import './App.css';
import SearchMovie from './searchMovie';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

let movie=[];
function App() {
  const [movieList, setMovieList] = useState([])
  const [searchValue, setSearchValue] = useState('harry');
  const [favMovieList, setFavMovieList] = useState([]);
 

  const getMovie = async () => {
    try {
      // console.log(favMovieList.length);
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=b155180e`);
        movie = response.data?.Search.map((m,i) => {
          if(localStorage.getItem('fav') && JSON.parse(localStorage.getItem('fav')).includes(m.Title)) {
            return m.fav = true;
          }else {
            return m.fav = false;
          }
        })
        // console.log(movie)
      setMovieList(response.data['Search']);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getMovie();
  }, [searchValue]);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        {movieList?.length === 0 ? (
          <div>Loading...</div>
        ) : (
            movieList?.map((e, i) => {
              return (
                <div className='list'>
                  <Link to={{ pathname: `/movie/${e.imdbID}` }}>
                    <img src={e.Poster} alt="display image" className='image'></img>
                  </Link>
                  <div className='row'>
                    <div className='description'>
                      <div >Movie Title : {e.Title}</div>
                      <div >Movie Year : {e.Year}</div>
                    </div>
                    
                    <button className={movie[i] ? "fav" : "button"} onClick={() => {
                      
                      console.log(movie[i])
                      var item = JSON.parse(localStorage.getItem("fav"));
                      if (item === null) {
                        localStorage.setItem("fav", JSON.stringify([e.Title]));
                      }
                      else {
                          if(movie[i] == false)
                          localStorage.setItem("fav", JSON.stringify([...item, e.Title]));
                      }
                      movie[i] = true;
                      setFavMovieList(e);
                    }}>Like</button>
                  </div>
                </div>
              )
            }) 
        )}
      </div>
    </div>
  );
}

export default App;