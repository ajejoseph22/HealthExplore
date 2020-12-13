import React from 'react';

const SearchBar = props => {
  const { searchKey, changeSearchKey } = props;
  const placeHolder = "Search for any job, title, keywords or company";
  return (
    <div className="p-5 bg-white flex flex-row items-center">
      <i className="fa fa-search search-icon"></i>
      <input name="search-key" value={searchKey} placeholder={placeHolder} className="ml-5 bg-red search-key-input" onChange={(e)=> changeSearchKey(e.target.value)} />
    </div>
  );
}

export default SearchBar;