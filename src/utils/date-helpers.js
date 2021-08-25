// https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
export function getTimeRemaining(endtime: Date): TimeRemaining {
  const total = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days: {
      value: days,
      unit: `${days === 1 ? 'day' : 'days'}`,
    },
    hours: {
      value: hours,
      unit: `${hours === 1 ? 'hour' : 'hours'}`,
    },
    minutes: {
      value: minutes,
      unit: `${minutes === 1 ? 'minute' : 'minutes'}`,
    },
    seconds: {
      value: seconds,
      // Don't check for singular tense because it occurs so frequently & briefly
      unit: 'seconds',
    },
  };
}

