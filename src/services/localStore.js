import { getMonth, getYear, getDate } from 'date-fns';

const EVENTS_STORAGE_KEY = 'EVENTS_STORAGE_KEY';

export const localStore = {
  getEvents: () => {
    const storage = localStorage.getItem(EVENTS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  },
  getEventsInMonth: (year, month) => {
    let storage = localStorage.getItem(EVENTS_STORAGE_KEY);
    storage = storage ? JSON.parse(storage) : [];
    let result = {};
    for (const key in storage) {
      const date = new Date(key);
      const itemYear = getYear(date);
      const itemMonth = getMonth(date);
      const itemDay = getDate(date);
      if(year === itemYear && month === itemMonth) result[itemDay] = storage[key];
    }
    return result;
  },
  setEvents: (events, date) => {
    const storage = localStorage.getItem(EVENTS_STORAGE_KEY);
    let allEvents = storage ? JSON.parse(storage) : {};
    if(!allEvents[date]) allEvents[date] = [];
    allEvents[date] = events;
    if(allEvents[date].length === 0) delete allEvents[date];
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(allEvents));
  },
  setEvent: (event) => {
    const storage = localStorage.getItem(EVENTS_STORAGE_KEY);
    let allEvents = storage ? JSON.parse(storage) : {};
    if(!allEvents[event.date]) allEvents[event.date] = [];
    allEvents[event.date].push(event);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(allEvents));
  },
};
