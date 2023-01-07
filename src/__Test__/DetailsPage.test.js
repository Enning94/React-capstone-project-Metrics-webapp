import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../Redux/configureStore';
import Details from '../Components/DetailsPage';

afterEach(cleanup);
test('Check if Details page is rendering correctly', () => {
  const detailsPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          ,
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailsPage).toMatchSnapshot();
});
