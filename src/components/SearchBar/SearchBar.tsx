import cn from 'classnames'
import type { Props } from './types'

const SearchBar: React.FC<Props> = ({ className, keyword, setKeyword }) => {
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(ev.target.value)
  }

  return (
    <div className={cn('shadow-sm', className)}>
      <input
        className='w-full h-12 px-3'
        placeholder='Search for any job, title, keywords or company'
        value={keyword}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
