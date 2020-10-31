import React from 'react';

import { TableContent, Row, Cell, Counter } from '../Style';

const Days = (props) => {
  const { data, currentDate, onSelectDay } = props;

  return (
    <TableContent>
      {data.map((week, weekIdx) => {
        return (
          <Row key={weekIdx}>
            {week.map((dayInfo, dayIdx) => {
              const isCurrentDate = dayInfo ? dayInfo.formatedDate.toISOString() === currentDate.toISOString() : null;
              return (
                <Cell 
                  key={`${weekIdx}-${dayInfo ? dayInfo.day : ''}-${dayIdx}`}
                  notEmpty={dayInfo !== null} 
                  isCurrentDate={isCurrentDate} 
                  onClick={() => dayInfo && onSelectDay(dayInfo.day)} >
                  {dayInfo && <div >{dayInfo.day}</div>}
                  {dayInfo && dayInfo.eventsCount ? <Counter>{dayInfo.eventsCount > 9 ? '9+' : dayInfo.eventsCount}</Counter> : null}
                </Cell>
              );
            })}
          </Row>
        );
      })}
    </TableContent>
  );
};

export default Days;

