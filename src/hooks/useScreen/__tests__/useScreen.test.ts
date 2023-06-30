import { renderHook } from '../../../../tests';
import { BREAKPOINTS } from '../../../styled';
import { useScreen } from '..';

describe('useScreen', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: undefined,
    });
  });

  it('Should set isDesktop to true when screen size is desktop', () => {
    const { result } = renderHook(() => useScreen());

    expect(result.current.isDesktop).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(false);
  });

  it('Should set isTablet to true when screen size is tablet', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: BREAKPOINTS.TABLET.max,
    });

    const { result } = renderHook(() => useScreen());

    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isMobile).toBe(false);
  });

  it('Should set isMobile to true when screen size is mobile', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: BREAKPOINTS.MOBILE.max,
    });

    const { result } = renderHook(() => useScreen());

    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(true);
  });
});
