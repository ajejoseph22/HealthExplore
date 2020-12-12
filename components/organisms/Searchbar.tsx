import { IMainProps } from "../../types";

const Searchbar = ({
  searchText, onSearchTextChange
}: Pick<IMainProps, 'searchText' | 'onSearchTextChange'>) => {
  return (
    <div className="min-w-min my-3 relative mx-auto text-gray-600">
      <button type="submit" className="absolute left-0 top-0 mt-3 ml-3">
        <svg className="text-gray-600 h-6 w-6 fill-current"
          version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" style={{background: 'new 0 0 56.966 56.966'}}
          width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
      <input value={searchText} onChange={onSearchTextChange}
        className="border-gray-300 bg-white h-12 px-5 pl-12 rounded-lg text-sm focus:outline-none w-screen"
        type="search" name="search" placeholder="Search for any job, title, keywords or company"/>
    </div>
  )
}

export default Searchbar;