import { Routes, Route } from "react-router-dom";

import { Main } from '../Main';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
