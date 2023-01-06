import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onArchive, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
