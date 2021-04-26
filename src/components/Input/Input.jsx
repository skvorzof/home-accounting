import React, { useRef } from 'react';
import useStore from '../../store';

import './input.css';

export const Input = (props) => {
  const { type, placeholder } = props;
  const inpRef = useRef('');

  const addValue = useStore((state) => state.addValue);

  const water = useStore((state) => state.water);
  const energy = useStore((state) => state.energy);

  const handleSend = () => {
    const value = inpRef.current.value;

    if (value === '') return alert('Заполните показания'); //TODO сделать тоаст

    const data = {
      date: Date.now(),
      value,
    };

    function setLocalStorageDate(type, arr, value) {
      localStorage.setItem(type, JSON.stringify([...arr, value]));
    }

    if (type === 'water') setLocalStorageDate('water', water, data);

    if (type === 'energy') setLocalStorageDate('energy', energy, data);

    addValue(type, data);

    inpRef.current.value = '';
  };
  return (
    <div className="input-box">
      <input ref={inpRef} type="number" placeholder={placeholder} />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
};
