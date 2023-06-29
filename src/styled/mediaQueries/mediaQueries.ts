import { SCREEN_SIZE } from '../../types';
import { BreakPoints } from './mediaQueries.types';

export const BREAKPOINTS: BreakPoints = {
  [SCREEN_SIZE.MOBILE]: {
    min: 0,
    max: 599,
  },
  [SCREEN_SIZE.TABLET]: {
    min: 600,
    max: 1023,
  },
  [SCREEN_SIZE.DESKTOP]: {
    min: 1024,
  },
};

export const MEDIA_DESKTOP = `(min-width: ${BREAKPOINTS.DESKTOP.min}px)`;
export const MEDIA_TABLET = `(min-width: ${BREAKPOINTS.TABLET.min}px) and (max-width: ${BREAKPOINTS.TABLET.max}px)`;
export const MEDIA_MOBILE = `(min-width: ${BREAKPOINTS.MOBILE.min}px) and (max-width: ${BREAKPOINTS.MOBILE.max}px)`;
