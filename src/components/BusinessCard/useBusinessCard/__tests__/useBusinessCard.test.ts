import { act, renderHook } from '../../../../../tests';
import { useBusinessCard } from '..';

const index = 1;
const fetchData = jest.fn();
const total = 15;
const url = 'google.com';

const MOCK_WINDOW_OPEN = jest.fn();
const MOCK_EVENT = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn()
} as unknown as Event;

window.open = MOCK_WINDOW_OPEN;

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => ({
    isIntersecting: true
  })
}));

describe('useBusinessCard', () => {
  describe('goToBusiness', () => {
    it('Should open new window with the business url when it is called', () => {
      const { result } = renderHook(() =>
        useBusinessCard({ total, index, url, fetchData })
      );

      act(() => result.current.goToBusiness(MOCK_EVENT))

      expect(MOCK_WINDOW_OPEN).toHaveBeenCalledWith(url, "_blank", "noopener,noreferrer");
    })
  })
});
