import React from 'react';
import { Link } from 'react-router-dom';

function AddPersonButton() {
  return (
    <Link to="/add-person">
      <button>Add a New Person</button>
    </Link>
  );
}

export default AddPersonButton;
