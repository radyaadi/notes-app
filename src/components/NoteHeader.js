import React from 'react';
import HeaderSearch from './SearchInput';

function NoteSearch({ search, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <HeaderSearch search={search} onSearch={onSearch} />
    </div>
  );
}

export default NoteSearch;
