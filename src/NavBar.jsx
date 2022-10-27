import logoNav from "./assets/logo.png";
import "./App.css";
import React, { useState } from "react";

export default function NavBar(props) {
  const [search, setSearch] = useState("");

  const URLSearch =
    "https://api.themoviedb.org/3/search/movie?api_key=2532129ebc283ab1884789680a23db9d&page=1&query=";

  const fetchingData = () => {
    fetch(URLSearch + search)
      .then((res) => res.json())
      .then((data) => props.m2(data.results))
      .catch((err) => console.log("HOY! ERROR: " + err));
  };
  const handleSearchOnKeyPress = (e) => {
    const s = search;
    if (e.key === "Enter" && s !== "") {
      return fetchingData();
    }
  };

  const handleSearchonClick = () => {
    if (search !== "") {
      return fetchingData();
    }
  };
  return (
    <div className='nav'>
      <div className='logowrapper'>
        <img className='logo' src={logoNav} alt='logo' />
      </div>
      <input
        onKeyPress={handleSearchOnKeyPress}
        onChange={(e) => setSearch(e.target.value)}
        className='searchinput'
        type='text'
        placeholder='search here'
        required='required'
      />
      <button className='searchbtn' onClick={handleSearchonClick}>
        Search
      </button>
    </div>
  );
}
