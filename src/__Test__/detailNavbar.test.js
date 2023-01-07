import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import useEvent from '@testing-library/user-event';
import DetailsNavbar from '../Components/detailNavbar';

test('DetailsNavbar renders correctly and navigates to home on click', () => {
  render(
    <BrowserRouter>
      <DetailsNavbar coin="Bitcoin" />
    </BrowserRouter>,
  );
  useEvent.click(screen.getByText('Bitcoin'));
});
