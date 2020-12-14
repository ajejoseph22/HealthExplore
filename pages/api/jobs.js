// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from '../../data/filters';
import jobs from '../../data/jobs.json';

function compareAsc(a, b, key) {
  if (a[key] < b[key]){
    return -1;
  }
  if (a[key] > b[key]){
    return 1;
  }
  return 0;
}

function compareDesc(a, b, key) {
  if (a[key] > b[key]){
    return -1;
  }
  if (a[key] < b[key]){
    return 1;
  }
  return 0;
}

// this function handles ordering the job items based on the keywords on the query
function compareWithFilters(item_a, item_b, key, filter, type="asc"){
  let foundIndex1 = filter.findIndex(f=>f.key==item_a[key])
  let foundIndex2 = filter.findIndex(f=>f.key==item_b[key])
  //console.log(foundIndex1, key, item_b[key] , item_a[key],foundIndex2);
  if(type=='asc'){
    if (foundIndex1 < foundIndex2){
      return -1;
    }
    if (foundIndex1 > foundIndex2){
      return 1;
    }
  }else{
    if (foundIndex1 > foundIndex2){
      return -1;
    }
    if (foundIndex1 < foundIndex2){
      return 1;
    }
  }
  return 0;
}

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests


  let results = req.query.q ? jobs.filter(job=>job.name.toLowerCase().includes(req.query.q.toLowerCase())) : jobs
  let sort = req.query.sort;

  // location based ordering and other keyword based ordering is handled on different
  // objects so we have to handle those 2 differently
  if(sort){

    sort = sort.split(',');
    sort.forEach(sort_param=>{
      if(sort_param.includes('location')){
        results.sort((a, b)=>sort.includes('-')?
        compareDesc(a, b, 'total_jobs_in_hospital'):
        compareAsc(a, b, 'total_jobs_in_hospital'));
      }else{
        try{
          let sortOrder = sort_param.includes('-')?'desc':'asc';
          sort_param = sort_param.replace('-', '');
          // filter objects seem like they are already sorted
          let sorted_filter = filters[sort_param];
          
          // here we sort the items in the job
          results.forEach((job,i)=>{
            results[i].items = results[i].items.sort((a, b)=>sort.includes('-')?
            compareWithFilters(a, b, sort_param, sorted_filter, sortOrder):
            compareWithFilters(a, b, sort_param, sorted_filter, sortOrder))
          })

        }catch(e){
          console.error(e)
        }
      }
    })
    
  }
  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json(results)
}

export const config = {
  api: {
    generateEtags: false,
  },
}
