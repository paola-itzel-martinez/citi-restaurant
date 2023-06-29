import styled from "styled-components";
import { Button } from "../../components";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Image } from "../../components/Image";
import { TypographyStyles } from "../../components/Typography";
import { MEDIA_MOBILE } from "../../styled";

export const Wrapper = styled(Card)`
  position: relative;
  align-items: center;
  max-width: 200px;

  @media ${MEDIA_MOBILE} {
    position: unset;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: strech;
    width: 100%;
    max-width: 100%;
  }
`;

export const CardButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: -16px;
  transform: translateX(-50%);

  @media ${MEDIA_MOBILE} {
    position: unset;
    left: unset;
    bottom: unset;
    transform: unset;
  }
`;

export const BusinessData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${TypographyStyles.Wrapper} {
    text-align: center;
    width: 100%;

    @media ${MEDIA_MOBILE} {
      text-align: start;
    }
  }

  @media ${MEDIA_MOBILE} {
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;
    gap: 12px;
    width: 40%;
  }
`;

export const DataRating = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media ${MEDIA_MOBILE} {
    flex-direction: column;
    gap: 6px;
  }
`;

export const DataDivider = styled(Divider)`
  @media ${MEDIA_MOBILE} {
    display: none;
  }
`;

export const CardDivider = styled(Divider)`
  display: none;

  @media ${MEDIA_MOBILE} {
    display: block;
  }
`;

export const Picture = styled(Image)`
  width: 135px;
  height: 125px;

  @media ${MEDIA_MOBILE} {
    width: calc(45% - 16px);
    min-width: 125px;
    max-width: 150px;
  }
`;
