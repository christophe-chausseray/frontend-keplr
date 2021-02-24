import { render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/', path = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(<Route path={path}>{ui}</Route>, { wrapper: BrowserRouter });
}

export { renderWithRouter };
