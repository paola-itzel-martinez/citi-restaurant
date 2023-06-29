import React from 'react';
import { palette } from '../../styled';
import { TypographyVariant } from '../../types';
import { Wrapper } from './Typography.styles';
import { GetAsType, TypographyProps } from './Typography.types';

const getAsType: GetAsType = ({ variant }) => {
  if (variant === TypographyVariant.TITLE) return 'h1';

  return 'p';
};

const Typography = ({
  children,
  textAlign,
  color = palette.NORMAL_TEXT,
  hasEllipsis = false,
  variant = TypographyVariant.NORMAL,
}: TypographyProps) => {
  const as = getAsType({ variant });

  return (
    <Wrapper
      as={as}
      variant={variant}
      color={color}
      hasEllipsis={hasEllipsis}
      textAlign={textAlign}>
      {children}
    </Wrapper>
  );
};

export default React.memo(Typography);
