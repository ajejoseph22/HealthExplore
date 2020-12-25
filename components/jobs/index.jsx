import { getFirstTwoLetters } from "../../util/methods";
import * as React from "react";
import { HomeContext } from "../../pages";
import {
  departmentSeparator,
  emptyString,
  hidden,
  sortingOptions,
  sortType,
} from "../../util/constants";

export function Jobs({ jobs, isLoading }) {
  const [clicked, setClicked] = React.useState({});
  const leafRefs = React.useRef([]);

  const getLinkStyle = (key) => ({
    cursor: "pointer",
    color: !clicked[key] ? "black" : "#add8e6",
  });

  return (
    <HomeContext.Consumer>
      {({ setSortingOptions }) =>
        !isLoading ? (
          <section className="w-full md:w-10/12 md:ml-2 bg-white py-4 px-4">
            <div className="flex justify-between mb-8 item-center">
              <h5>
                <span className="font-bold text-sm">
                  {Object.keys(jobs).reduce((acc, key) => {
                    acc += jobs[key].length;
                    return acc;
                  }, 0)}
                </span>{" "}
                Job postings
              </h5>
              <ul className="hidden sm:flex md:flex list-none text-sm">
                <li className="text-gray-500 mx-3">Sort by</li>
                {sortingOptions.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      let newObj;
                      if (!clicked[item]) {
                        newObj = { ...clicked, [item]: sortType.ASC };
                        setClicked(newObj);
                      } else if (clicked[item] === sortType.ASC) {
                        newObj = { ...clicked, [item]: sortType.DESC };
                        setClicked(newObj);
                      } else {
                        newObj = { ...clicked, [item]: sortType.NONE };
                        setClicked(newObj);
                      }

                      setSortingOptions(newObj);
                    }}
                    style={getLinkStyle(item)}
                    className="capitalize mx-3"
                  >
                    {item}{" "}
                    {clicked[item] && (
                      <span className="text-black lowercase">
                        <br /> {clicked[item]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {Object.keys(jobs).map((key, i) => (
              <div className="my-2.5 border-b" key={i}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log("clicked");
                    const el = leafRefs.current[key];
                    el.className = el.className.includes(hidden)
                      ? emptyString
                      : hidden;
                  }}
                  className="flex items-center py-1"
                >
                  <p className="uppercase h-8 w-8 py-1 mr-4 flex justify-center rounded-lg text-white font-bold text-md bg-gray-400">
                    {getFirstTwoLetters(key)}
                  </p>
                  <span className="text-xs">
                    {jobs[key].length} jobs for {key}
                  </span>
                </div>
                <div
                  ref={(el) => (leafRefs.current[key] = el)}
                  className={hidden}
                >
                  {jobs[key].map((item) => (
                    <div key={item.job_id}>
                      <div
                        className="py-2 border-t"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          const el = leafRefs.current[item.job_id];
                          el.className = el.className.includes(hidden)
                            ? emptyString
                            : hidden;
                        }}
                      >
                        <div className="font-bold text-xs">
                          {item.job_title}
                        </div>
                        <div className="text-xs">
                          {item.job_type} | ${item.salary_range[0]} - $
                          {item.salary_range[1]} an hour | {item.city}{" "}
                        </div>
                      </div>

                      <div
                        className={hidden}
                        ref={(el) => (leafRefs.current[item.job_id] = el)}
                      >
                        <div className="w-full flex mb-4">
                          <p className="font-semibold w-4/12">Department</p>
                          <p className="text-sm w-4/12">
                            {item.department.join(departmentSeparator)}
                          </p>
                        </div>
                        <div className="w-full flex mb-4">
                          <p className="font-semibold w-4/12">
                            Hours / shifts:
                          </p>
                          <p className="text-sm w-4/12">
                            {item.hours} hours / {item.work_schedule}
                          </p>
                        </div>
                        <div className="w-full flex mb-4">
                          <p className="font-semibold w-4/12">Summary</p>
                          <p className="text-sm w-4/12">{item.description}</p>
                          <div className="flex flex-col items-end justify-center w-4/12">
                            <button className="bg-blue-500 block mb-2 rounded-md text-white py-2 px-4">
                              Job details
                            </button>
                            <button className="bg-white block border border-blue-500 bg-white rounded-md text-blue-500 py-2 px-4">
                              Save job
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="w-full md:w-10/12 md:ml-2 bg-white py-4 px-4">
            Loading...
          </div>
        )
      }
    </HomeContext.Consumer>
  );
}

export default Jobs;
