import { HomeContext } from "../../pages";
import { getLinkStyle } from "../../util/methods";
import * as React from "react";
import { emptyString } from "../../util/constants";

const JobType = ({ filter }) => {
  const [clicked, setClicked] = React.useState({});

  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm pl-3 py-3">
          <h4 className="uppercase text-md font-semibold mb-3">Job type</h4>
          <ul className="list-none">
            {filter.map((jobType, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(jobType.key)) {
                    setClicked({ [jobType.key]: emptyString });
                    setFilter({ jobType: jobType.key });
                  } else {
                    setClicked({});
                    setFilter({ jobType: emptyString });
                  }
                }}
                style={getLinkStyle(clicked, jobType.key)}
                className="mb-2 capitalize"
              >
                {jobType.key}
                <span className="ml-3 text-gray-400 text-xs">
                  {jobType.doc_count}
                </span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default JobType;
