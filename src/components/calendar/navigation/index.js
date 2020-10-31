import React from 'react';

import { NavigationList, NavigationItem, NavigationText } from '../Style';

const Navigation = (props) => {
  const { month, year, onNavigationMonth } = props;

  return (
    <NavigationList>
      <NavigationItem onClick={() => onNavigationMonth(-1)}>
        &lt;
      </NavigationItem>
      <NavigationText>
        {month} - {year}
      </NavigationText>
      <NavigationItem onClick={() => onNavigationMonth(1)}>
        &gt;
      </NavigationItem>
    </NavigationList>
  );
};

export default Navigation;