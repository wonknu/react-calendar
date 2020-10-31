import React, { useContext } from 'react';

import { set, getYear, addMonths, setDate, format } from 'date-fns';

import DateContext from '../../context/date';

import { getDateInformations } from '../../utils';

import Head from './head';
import Days from './days';
import Navigation from './navigation';

import { useHistory } from "react-router-dom";

const Calendar = () => {
  const history = useHistory();
  const midnight = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
  const todayDate = set(new Date(), midnight);

  const [currentDate, setCurrentDate] = useContext(DateContext);
  const month = format(currentDate, 'MMMM');
  const year = getYear(currentDate);
  const dateInformations = getDateInformations(currentDate);

  const onNavigationMonth = (direction) => {
    const newDate = addMonths(currentDate, direction);
    setCurrentDate(newDate);
  };

  const onSelectDay = (newDay) => {
    let newDate = setDate(currentDate, newDay);
    newDate = set(newDate, midnight);
    setCurrentDate(newDate);
    history.push(`/events/${newDate}`);
  };

  return (
    <div>
      <Navigation month={month} year={year} onNavigationMonth={onNavigationMonth} />
      <Head />
      <Days 
        currentDate={todayDate}
        data={dateInformations.tableMonth} 
        onSelectDay={onSelectDay}/>
    </div>
  );
};

export default Calendar;
