import { Calendar, Component, createElement, DayHeaderContentArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './main.css';

// let event: Event = new Event();
let groupMilestoneColor: string = '#99b7b0';
let codeProjectMilestoneColor: string = '#41c54a';
let thesisProjectMilestoneColor: string = '#1d3bd2';


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
        locale: 'en-us', // us english locale
        firstDay: 1, // monday as first day
        // initialDate: '2021-09-01',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        weekNumbers: true, // show number of week
        businessHours: {
            daysOfWeek: [1, 2, 3, 4, 5], // monday - friday
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
        events: [
            {
                id: '1',
                title: 'Master Thesis',
                start: '2021-09-01',
                end: '2022-02-28',
                backgroundColor: groupMilestoneColor,
                display: 'background',
                url: 'https://gitlab.lrz.de/groups/aerospace-master-thesis/-/milestones/1'
            },
            {
                id: '2',
                title: 'Implement Neural ODE',
                start: '2021-09-01',
                end: '2021-09-30',
                url: 'https://gitlab.lrz.de/aerospace-master-thesis/aerospace-thesis-code/-/milestones/1',
                backgroundColor: codeProjectMilestoneColor,
            },
            {
                id: '3',
                title: 'Exposé',
                start: '2021-09-01',
                end: '2021-10-31',
                backgroundColor: thesisProjectMilestoneColor,
                url: 'https://gitlab.lrz.de/groups/aerospace-master-thesis/-/milestones/2'
            },
            {
                id: '4',
                title: 'Basic Understanding of AutoDiff',
                start: '2021-09-01',
                end: '2021-09-13',
                backgroundColor: thesisProjectMilestoneColor,
                url: 'https://gitlab.lrz.de/groups/aerospace-master-thesis/-/milestones/3'
            }
        ],
    });

    calendar.render();
});
