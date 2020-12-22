const experience = ["Intermediate", "Senior", "Internship", "Junior"];

const Experience = () => (
  <article className="bg-white text-sm p-3 mt-4">
    <h4 className="uppercase text-md font-semibold mb-3">Experience</h4>
    <ul className="list-none">
      {experience.map((exp) => (
        <li style={{ cursor: "pointer" }} className="mb-2 capitalize">
          {exp} <span className="ml-3 text-gray-400 text-xs">1992</span>
        </li>
      ))}
    </ul>
  </article>
);

export default Experience;
