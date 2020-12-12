import { IFiltersProps } from "../../types";

const Filters = ({
  heading, filters, filterType
}: IFiltersProps) => {
  return (
    <div className='flex flex-col bg-white w-80 py-5 my-4'>
      <h6 className='pb-4 px-5'>{heading}</h6>
      <ul className='divide-y-2 divide-white'>
        {filters.map((filter, i) => (
          <li
            data-filter-key={filter.key}
            data-filter-type={filterType}
            key={i}
            className={`py-3 px-5 cursor-pointer hover:text-blue-500 focus:text-blue-800 ${filter.active ? 'text-white bg-blue-400' : ''}`}
          >
            <p className='text-sm inline-block pr-4'>{filter.key}</p>
            <span className={`text-xs ${filter.active ? 'text-white' : 'text-gray-500'}`}>{filter.doc_count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters;