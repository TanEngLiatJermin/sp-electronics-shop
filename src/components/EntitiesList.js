import React, { useState } from "react";

const EntitiesList = ({ entities, onDeleteEntity }) => {
  const [selectedEntities, setSelectedEntities] = useState([]);

  // Handle selecting/deselecting an entity
  const toggleSelectEntity = (id) => {
    setSelectedEntities((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle deleting selected entities
  const handleDeleteSelected = () => {
    onDeleteEntity(selectedEntities);
    setSelectedEntities([]); // Clear selection after deletion
  };

  return (
    <div>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id} data-testid="EntityTestId">
            <input
              type="checkbox"
              checked={selectedEntities.includes(entity.id)}
              onChange={() => toggleSelectEntity(entity.id)}
              data-testid="EntitySelectTestId"
            />
            <span data-testid="EntityCategoryTestId">{entity.category}</span> - {entity.name}
            <button
              onClick={() => onDeleteEntity([entity.id])}
              data-testid="EntityDeleteTestId"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedEntities.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          data-testid="DeleteSelectedTestId"
        >
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default EntitiesList;
