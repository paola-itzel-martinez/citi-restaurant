import React from "react";
import { ButtonVariant, TypographyVariant } from "../../types";
import { StarsRating, Typography } from "..";
import { BussinesCardProps } from "./BusinessCard.types";
import {
  CardButton,
  BusinessData,
  CardDivider,
  DataRating,
  DefaultImage,
  Picture,
  Wrapper,
} from "./BusinessCard.styles";
import { useBusinessCard } from "./useBusinessCard";

const CARD_BUTTON_TEXT = "View";

const BusinessCard = (
  props: BussinesCardProps,
) => {
  const { goToBusiness, ref } = useBusinessCard({...props});
  const { image_url, price } = props;
  const Image = () => (
    image_url ?
      <Picture alt={props.name} src={props.image_url} /> :
      <DefaultImage />
  );

  return (
    <>
      <Wrapper
        ref={ref}
        onClick={goToBusiness}
        {...props}
      >
        <Image />

        <BusinessData>
          <Typography hasEllipsis>{props.name}</Typography>

          <CardDivider className="data-divider" />

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

      <CardDivider className="final-divider" />
    </>
  );
};

export default React.forwardRef(BusinessCard);
