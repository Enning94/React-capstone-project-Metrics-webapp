// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Detailspage from './Components/DetailsPage';
// import Homepage from './Components/HomePage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Homepage />} />
//         <Route path="/DetailsPage" element={<Detailspage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Home from './Components/HomePage';
import Details from './Components/DetailsPage';
import { fetchCrypto } from './Redux/reducers';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
