import React from 'react';
import { getInitialData } from '../utils/notes';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onArchiveChange = this.onArchiveChange.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchiveChange(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    const activeNote = this.state.notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNote = this.state.notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <div className="note-app__body">
          <h2 className="note-item__title">Active Note</h2>
          <NoteList
            notes={activeNote}
            onArchive={this.onArchiveChange}
            onDelete={this.onDeleteHandler}
          />
          <h2 className="note-item__title">Archived Note</h2>
          <NoteList
            notes={archivedNote}
            onArchive={this.onArchiveChange}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
