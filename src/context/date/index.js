import React, { useState } from 'react';
import { set } from 'date-fns';
 
const DateContext = React.createContext();

export const DateContextProvider = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDate = (date) => {
    const dateAtMidnight = set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    setCurrentDate(dateAtMidnight);
  };

  return (
    <DateContext.Provider value={[currentDate, changeCurrentDate]}>
      {props.children}
    </DateContext.Provider>
  );
};
 
export default DateContext;
