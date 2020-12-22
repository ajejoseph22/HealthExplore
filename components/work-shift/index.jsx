const shifts = ["Night Shift", "Day Shift"];

const WorkShift = () => (
  <article className="bg-white text-sm p-3 mt-4">
    <h4 className="uppercase text-md font-semibold mb-3">Work Shift</h4>
    <ul className="list-none">
      {shifts.map((shift) => (
        <li style={{ cursor: "pointer" }} className="mb-2 capitalize">
          {shift} <span className="ml-3 text-gray-400 text-xs">2001</span>
        </li>
      ))}
    </ul>
  </article>
);

export default WorkShift;
