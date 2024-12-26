import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddEntityForm = ({ onAddEntity }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.trim() || !name.trim()) {
      setError("Both fields are required!");
      return;
    }

    const newEntity = {
      id: uuidv4().slice(0, 10),
      category,
      name,
    };

    onAddEntity(newEntity);

    setCategory("");
    setName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          data-testid="AddEntityCategoryTestId"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <button type="submit" data-testid="AddEntitySubmitTestId">
        Add Entity
      </button>
    </form>
  );
};

export default AddEntityForm;
