import React from 'react';
import styles from './styles.css'

export default function Clock({ time }) {
  const hours = time.getHours();
  let timeOfDay = (hours >= 0 && hours <= 6) ? 'night' : 'day';

  return (
    <h1 id="time" className={timeOfDay}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
  