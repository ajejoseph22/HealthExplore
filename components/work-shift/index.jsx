import { HomeContext } from "../../pages";
import * as React from "react";
import { getLinkStyle } from "../../util/methods";

const shifts = ["Night Shift", "Day Shift"];

const WorkShift = () => {
  const [clicked, setClicked] = React.useState({});

  return (
    <HomeContext.Consumer>
      {({ setFilter }) => (
        <article className="bg-white text-sm p-3 mt-4">
          <h4 className="uppercase text-md font-semibold mb-3">Work Shift</h4>
          <ul className="list-none">
            {shifts.map((workShift, i) => (
              <li
                key={i}
                onClick={() => {
                  if (!clicked.hasOwnProperty(workShift)) {
                    setClicked({ [workShift]: "" });
                    setFilter({ workShift });
                  } else {
                    setClicked({});
                    setFilter({ workShift: "" });
                  }
                }}
                style={getLinkStyle(clicked, workShift)}
                className="mb-2 capitalize"
              >
                {workShift}{" "}
                <span className="ml-3 text-gray-400 text-xs">2001</span>
              </li>
            ))}
          </ul>
        </article>
      )}
    </HomeContext.Consumer>
  );
};

export default WorkShift;
