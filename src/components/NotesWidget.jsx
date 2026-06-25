import { useState, useEffect } from "react";

const NotesWidget = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = () => {
    if (!input.trim()) return;

    setNotes([...notes, input]);
    setInput("");
  };

  // Delete note
  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Notes</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />

      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesWidget;