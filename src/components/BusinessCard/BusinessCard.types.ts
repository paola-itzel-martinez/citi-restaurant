import { Business } from "types";
import { CardProps } from "../Card/Card.types";

export interface BussinesCardProps extends
  Omit<CardProps, "children">,
  Omit<Business, "id"> {
  index: number;
  total: number;
  fetchData: () => void;
}
