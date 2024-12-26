import React, { useState } from "react"; // Import React and useState
import AddEntityForm from "./components/AddEntityForm"; // Import AddEntityForm component
import FilterEntitiesForm from "./components/FilterEntitiesForm"; // Import FilterEntitiesForm component
import EntitiesList from "./components/EntitiesList"; // Import EntitiesList component

const App = () => {
  const [entities, setEntities] = useState([
    { id: "a1b2c3d4e5", category: "Laptops", name: "Dell Inspiron 15" },
    { id: "f6g7h8i9j0", category: "Smartphones", name: "iPhone 14" },
  ]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Get unique categories for the filter form
  const categories = [...new Set(entities.map((entity) => entity.category))];

  // Handler to add a new entity
  const handleAddEntity = (newEntity) => {
    setEntities((prevEntities) => [...prevEntities, newEntity]);
  };

  // Handler to delete one or multiple entities by IDs
  const handleDeleteEntity = (ids) => {
    setEntities((prevEntities) => prevEntities.filter((entity) => !ids.includes(entity.id)));
  };

  // Handler to toggle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  // Filter entities based on selected categories
  const filteredEntities = selectedCategories.length
    ? entities.filter((entity) => selectedCategories.includes(entity.category))
    : entities;

  return (
    <div>
      <h1>SP Electronics Shop</h1>
      <AddEntityForm onAddEntity={handleAddEntity} />
      <FilterEntitiesForm
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <EntitiesList entities={filteredEntities} onDeleteEntity={handleDeleteEntity} />
    </div>
  );
};

export default App;
