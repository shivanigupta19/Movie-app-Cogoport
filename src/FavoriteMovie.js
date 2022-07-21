import { Component, useEffect, useState } from 'react';

function FavoriteMovie() {
    var list = JSON.parse(localStorage.getItem("fav"));
    console.log(list);
    return (
        <div className='fav-body'>
            <h1>Favorite Movie</h1>
            <div className='fav-list'>
                <ul>{
                    list == null ? <p>No Favorite Movies :(</p> : list.map((e, i) => {
                        return (
                            <li>{e}</li>
                        )
                    })
                }</ul>
                
            </div>
        </div>
    );
}

export default FavoriteMovie;