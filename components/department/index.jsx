import { HomeContext } from "../../pages";
import * as React from "react";
import { getLinkStyle } from "../../util/methods";
import { emptyString } from "../../util/constants";

const Department = ({ filter }) => {
  const [clicked, setClicked] = React.useState({});
  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm p-3 mt-4">
          <h4 className="uppercase text-md font-semibold mb-3">Department</h4>
          <ul className="list-none">
            {filter.map((department, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(department.key)) {
                    setClicked({ [department.key]: emptyString });
                    setFilter({ department: department.key });
                  } else {
                    setClicked({});
                    setFilter({ department: emptyString });
                  }
                }}
                style={getLinkStyle(clicked, department.key)}
                className="mb-2 capitalize"
              >
                {department.key}
                <span className="ml-3 text-gray-400 text-xs">
                  {department.doc_count}
                </span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default Department;
