import React from 'react';
import { showFormattedDate } from '../utils/notes';
import ArchiveButton from './action/ArchiveButton';
import DeleteButton from './action/DeleteButton';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onDelete,
}) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <p className="note-item__title">{title}</p>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <ArchiveButton id={id} isArchived={archived} onArchive={onArchive} />
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </div>
    </>
  );
}

export default NoteItem;
