import React from 'react';
import Job from './Job';
import PropTypes from 'prop-types'

const JobList = props => {
  const { jobs, sortItems, changeSort } = props;

  const jobsList = () => {
    let ret = [];
    jobs.forEach((element, i) => {
      ret.push(
        <Job key={i} job={element} />
      );
    });
    return ret;
  }

  const sortItemsBar = () => {
    return (
      <div className="flex justify-between p-4">
        <p><span className="font-bold">{jobs.length}</span> job postings</p>

        <div className="flex items-center lg:flex hidden">
          <p className="font-bold text-gray-500 text-sm mr-4">Sort by</p>
          { Object.keys(sortItems).map( (element, i) => {
            return (
              <p key={'sort' + i} className="flex mr-4 cursor-pointer" onClick={() => changeSort(element)}>
                <span className="capitalize text-xs">{ element }</span>
                { sortItems[element] == -1 && <i className="fa fa-arrow-up ml-1 mr-1 text-xs" aria-hidden="true"></i>}
                { sortItems[element] == 1 && <i className="fa fa-arrow-down ml-1 mr-1 text-xs" aria-hidden="true"></i>}
              </p>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="w-3/4 w-full flex flex-col bg-white">
      { sortItemsBar() }
      <ul className="p-4">
        { jobsList() }
      </ul>
    </div>
  );
}

JobList.propTypes = {
  jobs: PropTypes.array,
  sortItems: PropTypes.object,
  changeSort: PropTypes.func
}

export default JobList;