import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import TestContainer from './TestContainer';

afterEach(cleanup);

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(
      [
        {id: 1, longitude: 'mocked longitude 1'},
        {id: 2, longitude: 'mocked longitude 2'},
        {id: 3, longitude: 'mocked longitude 3'},
      ]
    )
  })
})

afterEach(() => {
  jest.restoreAllMocks();
})

describe('when property button is clicked', () => {

  test.only("it shows property details", async () => {

    const { findByText, findByRole, getByText, getByTestId, baseElement, debug } = render(<TestContainer />);

    expect(fetch).toHaveBeenCalledTimes(1)
    await findByText('1');

    fireEvent(
      getByText('1'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(getByTestId('property-details-view').textContent).toBe("mocked longitude 1");
  });
});
