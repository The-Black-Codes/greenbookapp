import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Events.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Boycott Prince's Cold Chicken",
        allDay: true,
        start: new Date(2023, 28, 2),
        end: new Date(2023, 28, 2),
    },
    {
        title: "Boycott Little Shakes",
        start: new Date(2023, 28, 2),
        end: new Date(2023, 28, 2),
    }
];

export const Events = () => {
    const [newEvent, setNewEvent] = useState({ title: "", why: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="Events">
            <h1>Calendar</h1>
            <h2>Add New Boycott</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <div>
                <input type="text" placeholder="Why the boycott" style={{ width: "20%", marginRight: "10px" }} value={newEvent.why} onChange={(e) => setNewEvent({ ...newEvent, why: e.target.value })} />
            </div>
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                        Add Event
                    </button>
                </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}