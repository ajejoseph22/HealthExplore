import { getFirstTwoLetters } from "../../util/methods";
import * as React from "react";
import { HomeContext } from "../../pages";

export function Jobs({ jobs, updatedJobs }) {
  const sortingOptions = [
    "location",
    "role",
    "department",
    "education",
    "experience",
  ];
  // const fetchedJobs = updatedJobs.length ? updatedJobs : jobs;
  const [clicked, setClicked] = React.useState({});

  const getLinkStyle = (key) => ({
    cursor: "pointer",
    color: !clicked[key] ? "black" : "#add8e6",
  });

  const fetchedJobs = updatedJobs;
  return (
    <HomeContext.Consumer>
      {({ setSortingOptions }) => (
        <section className="w-full md:w-10/12 md:ml-2 bg-white py-4 px-4">
          <div className="flex justify-between mb-8 item-center">
            <h5>
              <span className="font-bold text-sm">
                {Object.keys(fetchedJobs).reduce((acc, key) => {
                  acc += fetchedJobs[key].length;
                  return acc;
                }, 0)}
              </span>{" "}
              Job postings
            </h5>
            <ul className="md:flex list-none text-sm">
              <li className="text-gray-500 mx-3">Sort by</li>
              {sortingOptions.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    let newObj;
                    if (!clicked[item]) {
                      newObj = { ...clicked, [item]: "asc" };
                      setClicked(newObj);
                    } else if (clicked[item] === "asc") {
                      newObj = { ...clicked, [item]: "desc" };
                      setClicked(newObj);
                    } else {
                      newObj = { ...clicked, [item]: "" };
                      setClicked(newObj);
                    }

                    setSortingOptions(newObj);
                  }}
                  style={getLinkStyle(item)}
                  className="capitalize mx-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {Object.keys(updatedJobs).map((key, i) => (
            <div key={i} className="flex items-center py-1">
              <p className="uppercase h-8 w-8 py-1 mr-4 flex justify-center rounded-lg text-white font-bold text-md bg-gray-400">
                {getFirstTwoLetters(key)}
              </p>
              <span className="text-xs">
                {updatedJobs[key].length} jobs for {key}
              </span>
            </div>
          ))}
        </section>
      )}
    </HomeContext.Consumer>
  );
}

export default Jobs;
