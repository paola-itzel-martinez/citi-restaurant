import React from "react";
import { Wrapper } from "./Image.styles";
import { ImageProps } from "./Image.types";

const Image = ({ src, alt, ...otherProps }: ImageProps) => (
  <Wrapper src={src} alt={alt} draggable="false" {...otherProps} />
);

export default React.memo(Image);
