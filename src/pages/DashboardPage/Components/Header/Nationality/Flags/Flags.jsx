import React from 'react';
import Flags from 'country-flag-icons/react/3x2';

const CountryFlags = ({ countryCode }) => {
  const Flag = Flags[countryCode];
  return <Flag />;
};

export default CountryFlags;
