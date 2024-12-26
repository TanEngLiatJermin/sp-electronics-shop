import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Install UUID library using npm install uuid

const AddEntityForm = ({ onAddEntity }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.trim() === "" || name.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    // Create a new entity object
    const newEntity = {
      id: uuidv4().slice(0, 10), // Generate a 10-character unique ID
      category,
      name,
    };

    // Pass the new entity to the parent component
    onAddEntity(newEntity);

    // Reset the form
    setCategory("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
