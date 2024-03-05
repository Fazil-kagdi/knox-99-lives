import React,{ useState }  from 'react';
import AddPersonButton from './AddPersonButton'; // Import the button component
import data from './99lives.json';
import AlphabetButtons from './AlphabetButtons';
import JsonRow from './JsonRow';
import './styles.css';

function HomePage() {

  const [sortedData, setSortedData] = useState(data);

  const handleLetterClick = (letter) => {
    const sortedData = data.filter((item) => {
      const name = item.Surname || '';
      return name.toUpperCase().startsWith(letter);
    });

    setSortedData(sortedData);
  };
  return (
    <div>
      <h2>99 LIVES</h2>
      <AddPersonButton  Persondata = {sortedData}/>
      <AlphabetButtons  onLetterClick={handleLetterClick}/>
      <div className="json-row-container">
        {sortedData.map((item, index) => (
          <JsonRow key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
