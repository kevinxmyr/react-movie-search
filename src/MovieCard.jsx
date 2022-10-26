import React from 'react'
import './MovieCard.css'

export default function MovieCard(props) {
  const poster = 'https://image.tmdb.org/t/p/w500/'

  return (
    // 
      <div className='card'>
        <div className='posterwrapper'>
          <img src={poster + props.poster_path} alt="poster image" />
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
