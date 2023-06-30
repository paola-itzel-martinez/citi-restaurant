import { Business } from "../../../types";
import { Categories, Filter, HandleFilter } from "../Restaurants.types";

export type UseRestaurants = () => {
  businesses: Business[];
  categories: Categories;
  dotsRef: React.Ref<HTMLDivElement>;
  filter: Filter
  isLoading: boolean;
  fetchData: () => void;
  handleFilter: HandleFilter
}
