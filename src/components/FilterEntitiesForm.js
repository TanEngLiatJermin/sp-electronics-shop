import React from "react";

const FilterEntitiesForm = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div>
      <h3>Filter by Category</h3>
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
            data-testid="FilterCategoryTestId"
          />
          <label>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterEntitiesForm;
