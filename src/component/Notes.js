import React from "react";

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map(note => (
        <li className="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>&nbsp;
            <small>{new Date().toLocaleDateString()}</small> &nbsp;
          </div>
          <button type="button" className="btn btn-danger btn-sm">
            {" "}
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
