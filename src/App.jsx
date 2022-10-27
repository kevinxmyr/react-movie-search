import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer';
import MovieCard  from './MovieCard'
import NavBar from './NavBar'
import ERROR from './ERROR'

function App(props) {
  const [movies, setMovies] = useState([]);
  const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2532129ebc283ab1884789680a23db9d'

  //poster path
  // console.log(movies[0].poster_path)

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
    .catch(err => console.log(`Error fetching in App.js: ${err}`))
  },[])
  // console.log(movies);

  return (
    <div className="App">

      <NavBar m2={setMovies}/>

      <h2 className='titleh2'>Search Movies & TV Series</h2>
       <div className='cardwrapper'>
        {
          movies.length !== 0 ? (
            movies.map(movie => {
              return <MovieCard key={movie.id} {...movie} />
            }) ) : (
            <ERROR />
          )
        }
      </div>
     <Footer />
    </div>
  )
}

export default App
 // movies.length !== 0 ? (
          //   movies.map(movie => {
          //     return <MovieCard URL={props.URL} key={movie.id} {...movie}/>
          //   }) ) : (
          //     <ERROR />
          //   )
        // }