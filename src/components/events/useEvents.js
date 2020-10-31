import { useState, useEffect } from 'react';
import { localStore } from '../../services/localStore';

export const useEvents = (date) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({text: '', date: new Date()});

  const addEvent = (event) => {
    setEvents(events.concat(event));
  };

  const changeNewEvent = (text, date) => setNewEvent({text, date});

  const submitNewEvent = () => {
    const createdEvent = {...newEvent, timestamp: new Date().toISOString()};
    addEvent(createdEvent);
    localStore.setEvent(createdEvent);
  };

  const removeEvent = (events, date) => {
    setEvents(events);
    localStore.setEvents(events, date);
  };

  useEffect(() => {
    const storedEvents = localStore.getEvents();
    const storedEventsAtDate = storedEvents[date];
    if(storedEventsAtDate) setEvents(storedEventsAtDate);
    return () => {};
  }, [date]);

  return {
    events,
    removeEvent,
    newEvent,
    changeNewEvent,
    submitNewEvent
  };
}
