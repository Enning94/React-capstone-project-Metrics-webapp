import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/HomeNavbar';
import store from '../Redux/configureStore';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );

    useEvent.click(screen.getByText('COIN DATA HUB'));
  });
});
