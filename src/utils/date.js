import { getDay, getMonth, getYear, getDaysInMonth, startOfMonth, endOfMonth } from 'date-fns';
import { localStore } from '../services/localStore';

export const getDateInformations = (date) => {
  const daysInMonth = getDaysInMonth(date);
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);
  const currentDayOfWeek = getDay(date);
  const firstDayOfMonthOfWeek = getDay(firstDayOfMonth);
  const month = getMonth(date);
  const year = getYear(date);

  const eventsInDays = localStore.getEventsInMonth(year, month);

  let tableMonth = [];
  let countWeeks = daysInMonth / 7;
  let currentDay = 1;

  for (let weeks = 0; weeks < countWeeks; weeks++) {
    tableMonth[weeks] = new Array(7).fill(null);
    for (let days = weeks === 0 ? firstDayOfMonthOfWeek : 0; days < 7; days++) {
      if(weeks === 0 && days < firstDayOfMonthOfWeek) break;
      let dayInformations = null;
      if(currentDay <= daysInMonth) {
        dayInformations = {
          day: currentDay,
          formatedDate: new Date(year, month, currentDay),
          eventsCount: eventsInDays[currentDay] ? eventsInDays[currentDay].length : null
        };
      }
      tableMonth[weeks][days] = dayInformations;
      currentDay++;
    }
  }

  return {
    daysInMonth,
    firstDayOfMonth,
    lastDayOfMonth,
    currentDayOfWeek,
    firstDayOfMonthOfWeek,
    tableMonth
  }
};
