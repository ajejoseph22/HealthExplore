import {useContext} from 'react';
import SearchContext from '../../context/SearchContext';

function SearchBar(){
  const context = useContext(SearchContext);

  function handleChange(e){
    context.setQuery(e.target.value)    
  }

  return(
    <div className="container">
      <input onChange={handleChange} 
      placeholder="Search for any job, title, keywords or company" className="w-full p-3"></input>
    </div>
    
  )
}

export default SearchBar;
