import React from 'react'
import CalendarFromLibrary from 'react-calendar'

import 'react-calendar/dist/Calendar.css';

function Calendar() {
    return (
        <div className='calendar'>
            <CalendarFromLibrary value={new Date()} />
        </div>
    )
}

export default Calendar

