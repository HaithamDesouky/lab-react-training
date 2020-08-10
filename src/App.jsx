import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNum from './components/RandomNum';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Haitham"
        firstName="Desouky"
        gender="female"
        height={185}
        birth={new Date(16, 11, 1989)}
        picture="https://randomuser.me/api/portraits/men/33.jpg"
      ></IdCard>

      <Greetings lang="en"> Haitham Desouky</Greetings>
      <Greetings lang="fr"> Jamile</Greetings>
      <Greetings lang="it"> Andrea</Greetings>

      <RandomNum min={1} max={6} />
      <RandomNum min={5} max={88} />
    </div>
  );
}

export default App;
