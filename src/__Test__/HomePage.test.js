import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../Redux/configureStore';
import Home from '../Components/HomePage';

afterEach(cleanup);
test('HomePage is rendering', () => {
  const homePage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(homePage).toMatchSnapshot();
});
