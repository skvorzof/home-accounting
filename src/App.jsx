import React from 'react';
import useStore from './store';

import { List, Input } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  const water = useStore((state) => state.water);
  const energy = useStore((state) => state.energy);

  return (
    <div className="App">
      <Input placeholder={'ХВ'} type={'water'} />
      <Input placeholder={'Энергия'} type={'energy'} />

      <h1>Показания:</h1>
      <div className="cols">
        <div className="col">
          <h2>Вода:</h2>
          <List data={water} />
        </div>
        <div className="col">
          <h2>Энергия:</h2>
          <List data={energy} />
        </div>
      </div>
    </div>
  );
}

export default App;
