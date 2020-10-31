import React from 'react';
import { format } from 'date-fns';

import { useEvents } from './useEvents';

import { useParams, useHistory } from "react-router-dom";

import { EventsWrapper, InputEvent, HeadEvent, DateEvent, BackButton, ListEvents, ItemEvent, CloseEvent, Info } from './Styles';

import CloseSvg from '../../assets/images/close.svg';

const Events = () => {
  const history = useHistory();
  const { date } = useParams();
  const { events, newEvent, removeEvent, changeNewEvent, submitNewEvent } = useEvents(date);

  const handleKeyPress = (evt) => {
    if (evt.charCode === 13 && newEvent.text.trim() !== '') {
      submitNewEvent();
      changeNewEvent('', date);
    }
  };

  const removeEventFromList = (event) => removeEvent(events.filter(evt => evt !== event), date);

  return (
    <div>
    <EventsWrapper>
      <HeadEvent>
        <BackButton onClick={() => history.push("/")} >
          &lt; Back
        </BackButton>
        <DateEvent>
          {format(new Date(date), 'd MMM yyyy')}
        </DateEvent>
      </HeadEvent>

      <ListEvents>
        {events.map((event, idx) => {
          return (
            <ItemEvent key={`${event.timestamp}`}>
              <span>{idx + 1} - {event.text}</span>
              <CloseEvent onClick={() => removeEventFromList(event)}>
                <img src={CloseSvg} alt="Delete" />
              </CloseEvent>
            </ItemEvent>
          );
        })}
      </ListEvents>

      <InputEvent 
        value={newEvent.text} 
        onChange={e => changeNewEvent(e.target.value, date)}
        onKeyPress={handleKeyPress} />
      </EventsWrapper>
      <Info>(Press enter to create an event)</Info>
    </div>
  );
};

export default Events;
