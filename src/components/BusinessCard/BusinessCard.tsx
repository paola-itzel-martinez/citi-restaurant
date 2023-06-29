import React from "react";
import { ButtonVariant, TypographyVariant } from "../../types";
import { StarsRating, Typography } from "..";
import { BussinesCardProps } from "./BusinessCard.types";
import {
  CardButton,
  CardDivider,
  BusinessData,
  DataRating,
  DataDivider,
  Picture,
  Wrapper,
} from "./BusinessCard.styles";

const CARD_BUTTON_TEXT = "View";

const BusinessCard = (
  props: BussinesCardProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { price } = props;

  const goToBusiness = (event: Event | React.BaseSyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(props.url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Wrapper ref={ref} onClick={goToBusiness} {...props}>
        <Picture alt={props.name} src={props.image_url} />

        <BusinessData>
          <Typography hasEllipsis>{props.name}</Typography>

          <DataDivider />

          <DataRating>
            <StarsRating rating={props.rating} />

            {price && (
              <Typography variant={TypographyVariant.SMALL}>
                {props.price}
              </Typography>
            )}
          </DataRating>

          <CardButton variant={ButtonVariant.CARD} onClick={goToBusiness}>
            {CARD_BUTTON_TEXT}
          </CardButton>
        </BusinessData>
      </Wrapper>

      <CardDivider />
    </>
  );
};

export default React.forwardRef(BusinessCard);
