import { useDebouncedCallback } from 'use-debounce';

export default ({ defaultValue = '', onChange }) => {
  
	const placeHolder = "Search for any job, title, keywords or company";

	const handleChange = useDebouncedCallback((value) => {
		console.log(value);
      	// setValue(value);
    }, 1000);

	return (
		<div className="p-5 bg-white flex flex-row items-center">
			<i className="fa fa-search search-icon"></i>
			<input name="search-key" defaultValue={defaultValue} placeholder={placeHolder} className="ml-5 bg-red search-key-input" onKeyUp={handleChange.callback} />
		</div>
	);
}

