import { HomeContext } from "../../pages";
import * as React from "react";
import { getLinkStyle } from "../../util/methods";
import { emptyString } from "../../util/constants";

const WorkShift = ({ filter }) => {
  const [clicked, setClicked] = React.useState({});

  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm p-3 mt-4">
          <h4 className="uppercase text-md font-semibold mb-3">Work Shift</h4>
          <ul className="list-none">
            {filter.map((workShift, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(workShift.key)) {
                    setClicked({ [workShift.key]: emptyString });
                    setFilter({ workShift: workShift.key });
                  } else {
                    setClicked({});
                    setFilter({ workShift: emptyString });
                  }
                }}
                style={getLinkStyle(clicked, workShift.key)}
                className="mb-2 capitalize"
              >
                {workShift.key}
                <span className="ml-3 text-gray-400 text-xs">
                  {workShift.doc_count}
                </span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default WorkShift;
