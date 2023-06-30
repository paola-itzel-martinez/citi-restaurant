import React from "react";
import { ButtonVariant } from "../../../../types";
import { FilterButton, FilterButtons, Wrapper } from "./Filters.styles";
import { FiltersProps } from "./Filters.types";

const Filters = ({
  categories,
  filter,
  handleFilter
}: FiltersProps) => {
  if (categories.length === 0) return null;

  const filterButtons = [];

  for (let i = 0; i < categories.length; i = i + 2) {
    const secondPosition = i + 1;
    const first = categories[i];
    const second = categories[secondPosition];
    const isSelected = filter === first.alias;

    filterButtons.push(
      <FilterButtons key={`filter-buttons-${i}`}>
        <FilterButton
          key={`filter-button-${i}`}
          className={`filter-button ${isSelected ? 'selected' : '' }`}
          variant={ButtonVariant.MENU}
          onClick={() => handleFilter(first)}>
          {first.title}
        </FilterButton>

        {second && (
          <FilterButton
            key={`filter-button-${secondPosition}`}
            className={`filter-button ${isSelected ? 'selected' : '' }`}
            variant={ButtonVariant.MENU}
            onClick={() => handleFilter(second)}>
            {second.title}
          </FilterButton>
        )}
      </FilterButtons>,
    );
  }

  return (
    <Wrapper>{filterButtons}</Wrapper>
  );
};

export default Filters;
