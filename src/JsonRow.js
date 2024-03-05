import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function JsonRow({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Link to={`/add-person?name=${data.Name}`}>
      <div className={`json-row`} onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        <div>
          <strong>Name:</strong> {data.Name}
        </div>
        <div>
          <strong>Surname:</strong> {data.Surname}
        </div>
        <div>
          <strong>Birth Date:</strong> {data.BirthDate}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default JsonRow;
