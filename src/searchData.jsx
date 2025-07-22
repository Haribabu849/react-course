import React, { useState } from "react";

const SearchData = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  console.log("inside search data", searchInput);
  return (
    <div>
      <span>search for tasks</span>
      <input
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleSearch(searchInput);
          setSearchInput("");
        }}
      >
        search
      </button>
    </div>
  );
};

export default SearchData;
