import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const handleEventDrop = (info) => {
    console.log('Event dropped:', info.event);
  };

  const handleEventClick = (info) => {
    alert('Event: ' + info.event.title);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      events={[
        { title: 'Event 1', date: '2024-07-22' },
        { title: 'Event 2', date: '2024-07-23' },
        { title: 'Event 2', date: '2024-07-23' }
      ]}
      eventDrop={handleEventDrop}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;