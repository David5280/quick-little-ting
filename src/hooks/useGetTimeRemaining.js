import React from 'react';
import { getTimeRemaining } from '../utils/date-helpers';
import moment from 'moment';

function useGetTimeRemaining(endTime) {
  const [timeRemaining, setTimeRemaining] = React.useState(
    getTimeRemaining(moment(endTime).toDate())
  );
  // Interval implementation - https://stackoverflow.com/a/63334017
  // fires checkTimeRemaining every 1000 ms (1 second)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(moment(endTime).toDate()));
    }, 1000);
    // clear interval to prevent memory leaks / other performance issues
    return () => {
      clearInterval(interval);
    };
  }, [endTime]);

  return timeRemaining;
}

export default useGetTimeRemaining;
