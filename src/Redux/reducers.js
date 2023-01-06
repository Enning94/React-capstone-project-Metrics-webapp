import { createAsyncThunk } from '@reduxjs/toolkit';

// action types
const FETCH_COINS = 'Redux/reducers/FETCH_COINS';
const FETCH_COINS_BY_ID = 'Redux/reducers/FETCH_COINS_BY_ID';
const initialState = { points: [], point: {} };

const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
const baseURLbyId = 'https://api.coingecko.com/api/v3/coins';

// eslint-disable-next-line default-param-last
export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, points: action.payload };
    case FETCH_COINS_BY_ID:
      return { ...state, point: action.payload };
    default:
      return state;
  }
};

export const fetchCrypto = createAsyncThunk(
  FETCH_COINS,
  async (_, { dispatch }) => {
    const action = dispatch;
    const response = await fetch(baseURL);
    const data = await response.json();
    const displayData = data.slice(0, 10);
    action({ type: FETCH_COINS, payload: displayData });
  },
);

export const fetchCryptoById = createAsyncThunk(
  FETCH_COINS_BY_ID,
  async (id, { dispatch }) => {
    const response = await fetch(`${baseURLbyId}/${id}`);
    const data = await response.json();
    dispatch({ type: FETCH_COINS_BY_ID, payload: data });
  },
);
