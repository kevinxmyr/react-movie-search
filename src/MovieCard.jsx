import React from 'react'
import './MovieCard.css'

export default function MovieCard(props) {
  const poster = 'https://image.tmdb.org/t/p/w500/'
  const posterNotAvailable = 'https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg'
  
  return (
    // 
      <div className='card'>
        <div className='posterwrapper'>
          <a href={props.URL}>
            <img src={props.poster_path ? poster + props.poster_path : posterNotAvailable} alt="poster" />
          </a>
        </div>

        <div className='info'>
          <h2 className='title'>{props.title}</h2>
          <p>Release Date: {props.release_date}</p>
          <p>Popularity: {props.vote_average} avg. votes</p>
          {/* <p>{props.overview}</p> */}
        </div>
      </div>
  )
}
