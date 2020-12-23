import { HomeContext } from "../../pages";
import { getLinkStyle } from "../../util/methods";
import * as React from "react";

const jobTypes = ["Per dorm", "Traveler", "Part-time", "Full-time"];

const JobType = () => {
  const [clicked, setClicked] = React.useState({});

  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm pl-3 py-3">
          <h4 className="uppercase text-md font-semibold mb-3">Job type</h4>
          <ul className="list-none">
            {jobTypes.map((jobType, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(jobType)) {
                    setClicked({ [jobType]: "" });
                    setFilter({ jobType });
                  } else {
                    setClicked({});
                    setFilter({ jobType: "" });
                  }
                }}
                style={getLinkStyle(clicked, jobType)}
                className="mb-2 capitalize"
              >
                {jobType}{" "}
                <span className="ml-3 text-gray-400 text-xs">737</span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default JobType;
