import React from 'react'
import './MovieCard.css'

export default function MovieCard(props) {
  const poster = 'https://image.tmdb.org/t/p/w500/'
  const posterNotAvailable = 'https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg'
  const {title, vote_average, release_date, overview, poster_path} = props;
  
  return (
      <div className='card'>
        <div className='posterwrapper'>
          <a href='#'>
            <img src={poster_path ? poster + props.poster_path : posterNotAvailable} alt="poster" />
          </a>
        </div>

        <div className='info'>
          <h2 className='title'>{title}</h2>
          <p>Popularity: {vote_average} avg. votes</p>
          <p>Release Date: {release_date}</p>

          <h3 className='overviewTitle'>Plot:</h3>
          <p className='cardinfo'>{overview}</p>
        </div>
      </div>
  )
}
