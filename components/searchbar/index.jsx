import React from "react";

const SearchBar = ({ setQuery }) => {
  const [dirty, setDirty] = React.useState(false);
  const handleChange = () => {
    if (!dirty) {
      setDirty(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && dirty) {
      // search
      setQuery(e.target.value);
      setDirty(false);
    }
  };

  return (
    <div className="mx-4 flex py-2 bg-white mt-5 rounded-md">
      <div className="w-1/12" />
      <input
        className="w-11/12 py-3 px-2 outline-none border-0 text-sm"
        type="search"
        placeholder="Search for any job, title, keyword or company"
        name="searchbar"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
