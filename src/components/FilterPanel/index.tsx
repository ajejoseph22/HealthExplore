import cn from 'classnames'
import type { FilterPanelProps } from './types'

const FilterPanel: React.FC<FilterPanelProps> = ({
  title,
  filter,
  items,
  selectedFilters,
  onSelect
}) => {
  if (!items) return null

  return (
    <div className='shadow-sm p-4 bg-white my-3'>
      <h3 className='mb-3 font-bold uppercase'>{title}</h3>
      <div>
        {items.map((e) => {
          const isSelected = selectedFilters && selectedFilters.includes(e.key)
          return (
            <div
              key={e.key}
              className={cn('cursor-pointer hover:text-opacity-60 text-gray-500', {
                'text-blue-500': isSelected
              })}
              onClick={() => onSelect(filter, e.key, !isSelected)}
            >
              <span className='text-opacity-80'>{e.key}</span> :{' '}
              <span className='text-opacity-40'>{e.doc_count}</span>
            </div>
          )
        })}
      </div>
      <div>

      </div>
    </div>
  )
}

export default FilterPanel
