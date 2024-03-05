import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddPersonForm from './AddPersonForm';
import data from "./99lives.json";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-person" element={<AddPersonForm Persondata={data}/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

