import React from 'react';
import { getInitialData, showFormattedDate } from '../utils/notes';
import NoteHeader from './NoteHeader';
import AddNote from './AddNote';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveChange = this.onArchiveChange.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: showFormattedDate(new Date()),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return { search: event.target.value };
    });
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
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const activeNote = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNote = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <NoteHeader
          search={this.state.search}
          onSearch={this.onSearchHandler}
        ></NoteHeader>
        <div className="note-app__body">
          <AddNote addNote={this.onAddNoteHandler} />

          <h2 className="note-item__title">Active Note</h2>
          {activeNote.length > 0 ? (
            <NoteList
              notes={activeNote}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveChange}
            />
          ) : (
            <p className="notes-list__empty-message">
              You don't have any active notes
            </p>
          )}

          <h2 className="note-item__title">Archived Note</h2>
          {archivedNote.length > 0 ? (
            <NoteList
              notes={archivedNote}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveChange}
            />
          ) : (
            <p className="notes-list__empty-message">
              You don't have any archived notes
            </p>
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
