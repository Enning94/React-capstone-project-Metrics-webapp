import React from 'react';
import renderer from 'react-test-renderer';
import CryptoTrend from '../Components/cryptoChange';

test('CryptoTrend renders correctly for positive change', () => {
  const tree = renderer.create(<CryptoTrend change={10} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CryptoTrend renders correctly for negative change', () => {
  const tree = renderer.create(<CryptoTrend change={-10} />).toJSON();
  expect(tree).toMatchSnapshot();
});
