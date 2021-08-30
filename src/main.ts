import { Calendar, Component, createElement, DayHeaderContentArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './main.css';

let dateTime = new Date();

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl: HTMLElement = document.getElementById('calendar')!;

    class CustomDayHeader extends Component<{ text: string }> {
        render() {
            return createElement('div', {}, this.props.text)
        }
    }

    let calendar = new Calendar(calendarEl, {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        locale: 'en-us',
        firstDay: 1,
        // initialDate: '2021-09-01',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        weekNumbers: true,
        businessHours: {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '08:00',
            endTime: "18:00",
        },
        nowIndicator: true,
        dayHeaderFormat: {
            weekday: 'long'
        },
        dayHeaderContent(arg: DayHeaderContentArg) {
            return createElement(CustomDayHeader, { text: arg.text })
        },
    });

    calendar.render();
});
