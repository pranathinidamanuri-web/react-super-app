import { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const allCategories = [
  "Action",
  "Comedy",
  "Drama",
  "Music",
  "Sports",
  "Thriller",
  "Fantasy",
  "Romance",
];

const Categories = () => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");

  const setCategories = useStore((state) => state.setCategories);
  const navigate = useNavigate();

  // 🔥 Toggle selection
  const handleSelect = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((c) => c !== category));
    } else {
      setSelected([...selected, category]);
    }
  };

  // 🔥 Continue button logic
  const handleContinue = () => {
    if (selected.length < 3) {
      setError("Select at least 3 categories");
      return;
    }

    setCategories(selected);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Choose Categories</h1>

      {/* 🔥 THIS IS WHERE YOUR CODE GOES */}
      {allCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          style={{
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
            backgroundColor: selected.includes(cat) ? "green" : "lightgray",
          }}
        >
          {cat}
        </button>
      ))}

      {/* Error */}
      {error && <p>{error}</p>}

      <br />

      {/* Continue button */}
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default Categories;