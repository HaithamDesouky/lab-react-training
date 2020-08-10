import React from 'react';

import './Greetings.css';

const Greetings = ({ lang, children }) => {
  let greeting;
  switch (lang) {
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'it':
      greeting = 'Ciao';
      break;
    default:
      greeting = 'Bom Dia';
  }
  return (
    <div className="individual">
      {greeting} {children}
    </div>
  );
};

export default Greetings;
