import React, {useState, useEffect, useContext} from 'react';
import SearchContext from '../../context/SearchContext';
import FiltersContext from '../../context/FiltersContext';

function Filters({jobs}){
  const filtersContext = useContext(FiltersContext);
  const {filters, setFilters} = filtersContext;

  function handleLocationClick(){
    // first find "sort" in the filters array

    let sortFilterIndex = filters.findIndex(filter=>filter.hasOwnProperty('sort'));
    if(sortFilterIndex!=-1){
        setFilters(oldFilters=>{
          let updatedFilters = [...oldFilters];
          // iterate and update the sort filter based on the already existing selection
          if(filters[sortFilterIndex].sort==null){
            updatedFilters[sortFilterIndex].sort = '-location';
          }else if(filters[sortFilterIndex].sort=='-location'){
            updatedFilters[sortFilterIndex].sort = 'location';
          }else{
            updatedFilters[sortFilterIndex].sort = null;
          }
          return updatedFilters
        })
    }
  }

  function handleFilterClick(filterKey, setSort){
    console.log(filterKey, setSort);
    setFilters(oldFilters=>{
      let updatedFilters = {...oldFilters};
      if(!updatedFilters[filterKey]){
        updatedFilters[filterKey] = `-${filterKey}`;
        setSort('asc');
      }else if(updatedFilters[filterKey]==`-${filterKey}`){
        updatedFilters[filterKey] = filterKey;
        setSort('desc');
      }else{
        updatedFilters[filterKey] = null;
        setSort(null);
      }
      return updatedFilters;
    })
  }

  const jobCount = jobs.reduce((a, b) => {
    return a + b.total_jobs_in_hospital
  }, 0);

  return(
    <div className="hidden md:flex md:flex-row">
      {jobs.length>0?<p className="mb-3 flex-1"><b>{jobCount}</b> Job postings</p>:null}
      <span>Sort by</span>
      <FilterType title="Location" value="location" onClick={handleFilterClick}/>
      <FilterType title="Experience" value="experience" onClick={handleFilterClick}/>
      <FilterType title="Role" value="job_type" onClick={handleFilterClick}/>
      <FilterType title="Department" value="department" onClick={handleFilterClick}/>
    </div>
  )
}

function FilterType({title, value, onClick}){
  const [sort, setSort] = useState(null);

  function handleClick(){
    onClick(value, setSort);
  }

  let sortText = `(${sort})`
  return(
    <div className="mr-2 ml-2" role="button" onClick={handleClick}>
      <span className="font-bold">{title}</span>
      {sort?<span>{sortText}</span>:null}
    </div>
  )
}

export default Filters;
