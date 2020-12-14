import {useState, useEffect} from 'react';
import FilterBox from '../FilterBox/index';

function FiltersBar(){
  const [filters, setFilters] = useState({});

  async function getFilters(){
    try{
      const url = '/api/filters';
      let response = await fetch(url);
      let data = await response.json();
      setFilters(data);
    }catch(e){

    }
  }

  useEffect(()=>{
    getFilters();
  },[])

  return(
    Object.entries(filters).map(([key, value])=>{
      let title = '';
      if(key=='job_type'){
        title = 'Job type'
      }else if(key=='work_schedule'){
        title = 'Work schedule'
      }else if(key=='experience'){
        title = 'Experience'
      }else{
        title = 'Department'
      }
      return <FilterBox data={value} title={title}/>
    })
  )
}

export default FiltersBar;
