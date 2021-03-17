function getTimeZone(currentCity) {
  switch (currentCity) {
    case 'Paris':
      return 'Europe/Paris';
    case 'London':
      return 'Europe/London';
    case 'Bern':
      return 'Europe/Zurich';
    case 'Moskow':
      return 'Europe/Moscow';
    case 'Amsterdam':
      return 'Europe/Amsterdam';
    case 'Berlin':
      return 'Europe/Berlin';
    case 'Copenhagen':
      return 'Europe/Copenhagen';
    case 'Washington':
      return 'America/New_York';
  }
}

function toMainLetter(str) {
  const firstLetter = str[0].toUpperCase();
  const remnant = str.slice(1, str.length);
  return firstLetter + remnant;
};

export { getTimeZone, toMainLetter };
