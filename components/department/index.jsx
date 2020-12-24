import { HomeContext } from "../../pages";
import * as React from "react";
import { getLinkStyle } from "../../util/methods";
import { departments, emptyString } from "../../util/constants";

const Department = () => {
  const [clicked, setClicked] = React.useState({});
  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm p-3 mt-4">
          <h4 className="uppercase text-md font-semibold mb-3">Department</h4>
          <ul className="list-none">
            {departments.map((department, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(department)) {
                    setClicked({ [department]: emptyString });
                    setFilter({ department });
                  } else {
                    setClicked({});
                    setFilter({ department: emptyString });
                  }
                }}
                style={getLinkStyle(clicked, department)}
                className="mb-2 capitalize"
              >
                {department}
                <span className="ml-3 text-gray-400 text-xs">737</span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default Department;
