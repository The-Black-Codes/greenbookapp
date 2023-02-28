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
import Modal from "react-modal";
import { EventModal } from "./Modal";

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
        start: new Date(2023, 1, 28),
        end: new Date(2023, 1, 28),
        why: "Because they will only serve cold chicken to black people 🤬🍗🥶🤮",
    },
    {
        title: "Boycott Little Shakes",
        start: new Date(2023, 1, 27),
        end: new Date(2023, 1, 27),
        why: "Because they threw a shake at me 🤬",
    },
];

export const Events = () => {
    const [newEvent, setNewEvent] = useState({
        title: "",
        why: "",
        start: "",
        end: "",
    });
    const [allEvents, setAllEvents] = useState(events);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
        setNewEvent({ title: "", why: "", start: "", end: "" });
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setIsOpen(true);
    };

    return (
      <div className="Events">
        <h1 className="text-4xl mt-4 mb-2">Boycott Calendar</h1>
        <div className="space-y-1">
          <input
            className="border border-slate-500 rounded-xl p-1"
            type="text"
            placeholder="Event Title"
            style={{
              width: "20%",
              height: "50px",
              marginRight: "10px",
            }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <div>
            <textarea
              className="border border-slate-500 rounded-xl p-1"
              placeholder="Reason for boycott"
              style={{
                width: "20%",
                height: "50px",
                marginRight: "10px",
              }}
              value={newEvent.why}
              onChange={(e) =>
                setNewEvent({ ...newEvent, why: e.target.value })
              }
              rows={3}
            />
          </div>
          <DatePicker
            className="border border-slate-500 rounded-xl p-1"
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            className="border border-slate-500 rounded-xl p-1"
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button
            className="event-button"
            onClick={handleAddEvent}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Add Event
          </button>
        </div>
        <div
          style={{
            height: "500pt",
            margin: "auto",
            maxWidth: "800px",
            marginTop: "10px",
          }}
        >
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "80%", margin: "auto", display: "block" }}
            onSelectEvent={handleEventClick}
          />
        </div>

        {selectedEvent && modalIsOpen && (
          <EventModal
            isOpen={modalIsOpen}
            onClose={() => setIsOpen(false)}
            event={selectedEvent}
          />
        )}
      </div>
    );
};
