import React, { useCallback, useEffect, useState } from 'react';
import { getFilterList } from '../../api/RESTApi';

const FilterBar = props => {
  const { filters, addFilter } = props;

  const [modalFilter, setModalFilter] = useState(null)
  const [filterList, setFilterList] = useState({});

  useEffect(() => {
    getFilterList().then(response => {
      setFilterList(response.data);
    });
  }, []);

  const onCheckFilter = (key, value) => {
    if(!filters[key]) return false;
    if(filters[key].indexOf(value) == -1) return false; 
    return true;
  }

  const filterBars = () => {
    let ret = [];
    for (const [key, value] of Object.entries(filterList)) {
      ret.push(
        <div key={key} className="bg-white lg:p-6 p-4">
          <h3 className="font-bold uppercase mb-2">{key}</h3>

          { value.slice(0, 10).map((element, i) =>
            <div key={i} className="flex mb-2 cursor-pointer" onClick={() => addFilter(key, element.key)}>
              <h4 className="flex justify-between w-full lg:w-1/4 p-2 cursor-pointer" className={onCheckFilter(key, element.key) ? "text-blue-500" : ""}>
                {element.key}
                <span className="text-xs text-gray-400 mx-2">{element.doc_count}</span>
              </h4>
            </div>
          ) }
          
          { value.length > 10 &&
            <button className="text-blue-600 outline-none" onClick={() => setModalFilter(key)}>Show more</button>
          }
        </div>
      )
    }
    return ret;
  }

  const filterModal = () => {
    return (
      <div className="modal">
        <div className="w-3/4">
          <div className="border-0 bg-white">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300">
              <h3 className="text-2xl font-semibold">{modalFilter}</h3>
              <button className="p-1 ml-auto bg-transparent border-0" onClick={() => setModalFilter(null)}>
                <i className="fa fa-times text-2xl" />
              </button>
            </div>
            
            <div className="flex flex-wrap p-6">
              { filterList[modalFilter].map((element, i) => 
                <div key={i} className="flex justify-between w-full lg:w-1/4 p-2 cursor-pointer" onClick={() => addFilter(modalFilter, element.key)}>
                  <h4 className={onCheckFilter(modalFilter, element.key) ? "text-blue-500" : ""}>{element.key}</h4>
                  <p className="text-gray-600">{element.doc_count}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-1/4 hidden filterWrap lg:block space-y-4">
      { filterBars() }
      { modalFilter && filterModal() }
    </div>
  );
}

export default FilterBar;