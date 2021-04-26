import React from 'react';

export const List = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item) => {
        let date = new Date(item.date).toDateString('ru');
        return (
          <li key={item.date}>
            {item.value} <span className="date">{date}</span>
          </li>
        );
      })}
    </ul>
  );
};
