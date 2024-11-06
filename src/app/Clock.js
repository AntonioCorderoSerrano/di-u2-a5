import React from 'react';

export default function Clock({ time }) {
  const hours = time.getHours();
  const timeOfDay = (hours >= 0 && hours <= 6) ? 'night' : 'day';

  return (
    <h1 id="time" className={timeOfDay}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
  