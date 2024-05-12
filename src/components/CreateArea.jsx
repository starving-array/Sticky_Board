import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setTitlsetNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(ev) {
    const { name, value } = ev.target;
    setTitlsetNewNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function addNoteSubmit(e) {
    props.onAdd(newNote);
    setTitlsetNewNote({ title: "", content: "" });
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={handleChange}
        />
        <button onClick={addNoteSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
