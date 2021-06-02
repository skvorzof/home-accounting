import React from 'react';

export const List = (props) => {
  const { data } = props;
  console.log(data.reverse());
  return (
    <ul>
      {data
        .map((item) => {
          // Форматируем дату из Timestamp
          let date = new Intl.DateTimeFormat('ru-RU').format(item.date);
          return (
            <li key={item.date}>
              {item.value} <span className="date"> - {date}</span>
            </li>
          );
        })
        .reverse()}
    </ul>
  );
};
