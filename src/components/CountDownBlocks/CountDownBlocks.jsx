import React from 'react';
import useGetTimeRemaining from '../../hooks/useGetTimeRemaining';
import './CountDownBlocks.css'

const CountDownBlocks= ({ endTime }) => {
  const timeRemaining = useGetTimeRemaining(endTime);
  if (!timeRemaining) return null;
  return (
    <div className="container">
      <div className="blocksContainer">
        {Object.keys(timeRemaining).map((key, i) => {
            return (
              <div className="block" key={key + i}>
                <div>
                  <p className="blockValue">
                    {timeRemaining[key].value}
                  </p>
                </div>
                <p className="blockText">
                  {timeRemaining[key].unit.toUpperCase()}
                </p>
              </div>
            );
        })}
      </div>
      <p className="untilText">UNTIL ARIANA MOVES TO DENVER!</p>
    </div>
  );
};

export default CountDownBlocks;
