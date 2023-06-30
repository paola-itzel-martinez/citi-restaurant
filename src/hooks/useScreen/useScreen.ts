import { useLayoutEffect, useState } from "react";
import { BREAKPOINTS } from "../../styled";
import { SCREEN_SIZE } from "../../types";
import { UseScreen } from "./useScreen.types";

const getDevice = (): SCREEN_SIZE => {
  const width = window.innerWidth;

  if (width <= (BREAKPOINTS.MOBILE.max || 0)) {
    return SCREEN_SIZE.MOBILE;
  }
  
  if (width <= (BREAKPOINTS.TABLET?.max || 0 )) {
    return SCREEN_SIZE.TABLET;
  }

  return SCREEN_SIZE.DESKTOP;
};

export const useScreen: UseScreen = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const updateSize = (): void => {
      const newDevice = getDevice();

      setIsDesktop(newDevice === SCREEN_SIZE.DESKTOP);
      setIsTablet(newDevice === SCREEN_SIZE.TABLET);
      setIsMobile(newDevice === SCREEN_SIZE.MOBILE);
    };
  
    useLayoutEffect(() => {
      updateSize();
  
      window.addEventListener('resize', updateSize);
  
      return (): void => window.removeEventListener('resize', updateSize);
    }, []);
  
    return {
      isDesktop,
      isTablet,
      isMobile
    };
  };