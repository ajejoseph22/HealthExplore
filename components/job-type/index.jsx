const JobType = () => (
  <aside className="w-full md:w-2/12 mr-2">
    <article className="bg-white text-sm pl-3 py-3">
      <h4 className="uppercase text-md font-semibold mb-3">Job type</h4>
      <ul className="list-none">
        <li className="mb-2 capitalize">
          Per dorm <span className="ml-3 text-gray-400 text-xs">737</span>
        </li>
        <li className="mb-2 capitalize">
          traveller <span className="ml-2 text-gray-400 text-xs">1223</span>
        </li>
        <li className="mb-2">
          Part-time <span className="ml-2 text-gray-400 text-xs">6477</span>
        </li>
        <li className="mb-2">
          Full-time <span className="ml-2 text-gray-400 text-xs">234</span>
        </li>
      </ul>
    </article>
  </aside>
);

export default JobType;
