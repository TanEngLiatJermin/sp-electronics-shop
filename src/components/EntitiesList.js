import React from "react";

const EntitiesList = ({ entities, onDeleteEntity }) => {
  return (
    <ul>
      {entities.map((entity) => (
        <li key={entity.id} data-testid="EntityTestId">
          <span data-testid="EntityCategoryTestId">{entity.category}</span> - {entity.name}
          <button
            onClick={() => onDeleteEntity(entity.id)}
            data-testid="EntityDeleteTestId"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EntitiesList;
