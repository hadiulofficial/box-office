import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ShowDetails from './Pages/ShowDetails';
import Starred from './Pages/Starred';

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={ <ShowDetails />} />
        <Route path="*" element={ <NotFound />} />

      </Routes>
    </div >
  );
};

export default App;