import React from 'react';

function SearchInput({ search, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search your note here"
        value={search}
        onChange={onSearch}
      ></input>
    </div>
  );
}

export default SearchInput;
