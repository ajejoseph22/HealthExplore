//Assets
import SearchIcon from '../../assets/icons/search.svg';

const SearchBar = ({ placeholder, value, onInputChange, onSearch }) => {
    //Functions
    const handleInputChange = (newText) => {
        if (onInputChange)
            onInputChange(newText)
    }

    const handleSearch = () => {
        if (onSearch) {
            onSearch();
        }
    }

    const handleKeyPress = (event) => {
        if (event.keyCode == 13) {
            //Enter pressed
            handleSearch();
        }
    }

    return (
        <div className={'flex w-full h-12 shadow-sm rounded-xs'}>
            <button
                className={'flex justify-center items-center cursor-pointer bg-white-500 pl-4 pr-2'}
                onClick={() => handleSearch()}
            >
                <SearchIcon />
            </button>
            <input
                className={`w-full p-2`}
                type={'text'}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
            />
        </div>
    )
}

export default SearchBar;