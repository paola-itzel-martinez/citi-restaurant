import React from "react";
import { StarIcon, Wrapper } from "./StarsRating.styles";
import { StarProps } from "./StarsRating.types";

const TOTAL_STARS = 5;

const StarsRating = ({ rating }: StarProps) => {
  const filledStars = [...Array(Math.floor(rating))];
  const emptyStars = [...Array(Math.floor(TOTAL_STARS - Math.ceil(rating)))];
  const hasHalfStar = rating % 1 !== 0;

  return (
    <Wrapper>
      {filledStars?.map((_, index) => (
        <StarIcon
          key={`filled-rating-${index}`}
          data-testid="filled-star"
          className="fas fa-star"
        />
      ))}

      {hasHalfStar && (
        <StarIcon
          key="half-star"
          data-testid="half-star"
          className="fas fa-star-half-alt"
        />
      )}

      {emptyStars.map((index) => (
        <StarIcon
          key={`empty-star-${index}`}
          data-testid="empty-star"
          className="far fa-star"
        />
      ))}
    </Wrapper>
  );
};

export default React.memo(StarsRating);
