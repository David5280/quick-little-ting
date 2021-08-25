import React from 'react';
import useGetTimeRemaining from '../../hooks/useGetTimeRemaining';

const CountDownBlocks= ({ endTime }) => {
  const timeRemaining = useGetTimeRemaining(endTime);
  if (!timeRemaining) return null;
  return (
    <div>
      {Object.keys(timeRemaining).map((key, i) => {
        // exclude 'seconds', include first 3/4
        if (i < 3)
          return (
            <div key={key + i}>
              <div>
                <p>
                  {timeRemaining[key].value}
                </p>
              </div>
              <p category="c2">
                {timeRemaining[key].unit.toUpperCase()}
              </p>
            </div>
          );
      })}
    </div>
  );
};

export default CountDownBlocks;
