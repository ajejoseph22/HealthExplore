import { HomeContext } from "../../pages";
import * as React from "react";
import { getLinkStyle } from "../../util/methods";
import { emptyString, experience } from "../../util/constants";

const Experience = () => {
  //todo : create custom hook to reuse this state logic among filter-related components
  const [clicked, setClicked] = React.useState({});
  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm p-3 mt-4">
          <h4 className="uppercase text-md font-semibold mb-3">Experience</h4>
          <ul className="list-none">
            {experience.map((experience, i) => (
              <li
                onClick={() => {
                  if (!clicked.hasOwnProperty(experience)) {
                    setClicked({ [experience]: emptyString });
                    setFilter({ experience });
                  } else {
                    setClicked({});
                    setFilter({ experience: emptyString });
                  }
                }}
                key={i}
                style={getLinkStyle(clicked, experience)}
                className="mb-2 capitalize"
              >
                {experience}
                <span className="ml-3 text-gray-400 text-xs">1992</span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default Experience;
