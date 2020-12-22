const departments = [
  "Anesthesiology & Perioperative Medicine",
  "Orthopaedic Surgery",
  "Pediatrics",
  "Ophthalmology",
  "Neurosurgery",
  "Pathology & Laboratory Medicine",
  "Medicine",
  "Neurology",
  "Family Medicine",
  "Head and Neck Surgery",
  "Radiation Oncology",
  "Dental Services",
  "Rehabilitation Services",
];

const Department = () => (
  <article className="bg-white text-sm p-3 mt-4">
    <h4 className="uppercase text-md font-semibold mb-3">Department</h4>
    <ul className="list-none">
      {departments.map((department) => (
        <li style={{ cursor: "pointer" }} className="mb-2 capitalize">
          {department} <span className="ml-3 text-gray-400 text-xs">737</span>
        </li>
      ))}
    </ul>
  </article>
);

export default Department;
