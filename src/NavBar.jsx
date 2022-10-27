import logoNav from "./assets/logo.png";
import "./App.css";
import React, { useState } from "react";

export default function NavBar(props) {
  const [search, setSearch] = useState('');

  const URLSearch =
    "https://api.themoviedb.org/3/search/movie?api_key=2532129ebc283ab1884789680a23db9d&page=1&query=";

  const handleSearch = (e) => {
    if(search !== '' && e.key === 'Enter'){
      return fetch(URLSearch + search)
        .then((res) => res.json())
        .then((data) => props.m2(data.results))
        .catch((err) => console.log("HOY! ERROR: " + err))
    } 
  };

  return (
    <div className='nav'>
      <div className='logowrapper'>
        <img className='logo' src={logoNav} alt='logo' />
      </div>
      <input
        onKeyPress={handleSearch}
        onChange={(e) => setSearch(e.target.value)}
        className='searchinput'
        type='text'
        placeholder='search here'
        required='required'/>
      <button className='searchbtn' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
