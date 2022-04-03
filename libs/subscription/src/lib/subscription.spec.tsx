import { render } from '@testing-library/react';

import Subscription from './subscription';

describe('Subscription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Subscription />);
    expect(baseElement).toBeTruthy();
  });
});
