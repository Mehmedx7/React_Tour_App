import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
    <form 
    className='search-form d-flex align-items-center'
    method='POST' action='#' 
    >
     <input type="text" name="query" placeholder='Search' title='Enter Search Keyword' />
      <button className='serchbtn' type='submit' title="search" >
        <i className='bi bi-search'></i>
      </button>
    
    </form>
    </div>
  )
}

export default SearchBar