import { Categories, Filter, HandleFilter } from "../../Restaurants.types";

export type FiltersProps = {
  categories: Categories;
  filter: Filter;
  handleFilter: HandleFilter;
};
