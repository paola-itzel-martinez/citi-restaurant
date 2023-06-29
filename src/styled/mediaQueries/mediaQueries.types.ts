import { SCREEN_SIZE } from '../../types';

export type BreakPoints = {
  [key in SCREEN_SIZE]: {
    min: number;
    max?: number;
  };
};
