import { IFiltersProps } from "../../types";

const Filters = ({
  heading, filters
}: IFiltersProps) => {
  return (
    <div className='flex flex-col bg-white w-80 m-3 p-5'>
      <h6 className='py-4'>{heading}</h6>
      <ul>
        {filters.map((filter, i) => (
          <li key={i} className='my-3 cursor-pointer'>
            <p className='text-sm inline-block pr-4'>{filter.key}</p>
            <span className='text-xs text-gray-500'>{filter.doc_count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters;