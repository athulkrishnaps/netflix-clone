import { useEffect } from "react";
import React from "react";
import "./Banner.css";
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import { useState } from "react";


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      const index = Math.floor(Math.random() * 20)
      setMovie(response.data.results[index])

    })
  }, [])

  return (
    <div>

      <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className="banner" >
        <div className="content">
          <h1 className="title">{movie ? movie.title : ''} </h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My lsit</button>
          </div>
          <h1 className="description">
            {movie ? movie.overview : ''}
          </h1>
        </div>
        <div className="fade_buttom"></div>
      </div>
    </div >
  );
}

export default Banner;
