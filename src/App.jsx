import React from 'react';
import useStore from './store';

import { Input } from './components';
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
          <h2>Вода</h2>
          <ul>
            {water.map((item) => {
              let d = new Date(item.date).toDateString('ru');
              return (
                <li key={item.date}>
                  {item.value} <span className="date">{d}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <h2>Энергия</h2>
          <ul>
            {energy.map((item) => {
              let d = new Date(item.date).toDateString('ru');
              return (
                <li key={item.date}>
                  {item.value}
                  <span className="date">{d}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
