import React from "react";

const EntitiesList = ({ entities }) => {
  return (
    <ul>
      {entities.map((entity) => (
        <li key={entity.id} data-testid="EntityTestId">
          <span data-testid="EntityCategoryTestId">{entity.category}</span> -{" "}
          {entity.name}
        </li>
      ))}
    </ul>
  );
};

export default EntitiesList;
