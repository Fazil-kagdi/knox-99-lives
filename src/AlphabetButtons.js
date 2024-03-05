import React from 'react';

function AlphabetButtons({ onLetterClick }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div>
      {alphabet.split('').map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AlphabetButtons;
