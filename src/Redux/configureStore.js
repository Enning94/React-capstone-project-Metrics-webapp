// import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { dataReducer } from './reducers';
// // import rocketsReducer from './rockets/RocketReducer';
// // import missionReducer from './mission/mission';

// const rootReducer = combineReducers({
//   dataReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// }, applyMiddleware(thunk, logger));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { coinReducer } from './reducers';

// create store
const store = configureStore({
  reducer: {
    crypto: coinReducer,
  },
});

export default store;
