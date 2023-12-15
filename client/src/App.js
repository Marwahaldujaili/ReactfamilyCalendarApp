import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { useState } from "react";
import EventList from "./components/EventsComponents/EventList";
import EventForm from "./components/EventsComponents/EventForm";
import UpdateEventForm from "./components/EventsComponents/UpdateEventForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    setEditEventId(null); // Close the update form
  };

  const handleEditEvent = (eventId) => {
    setEditEventId(eventId);
  };

  const handleCancelUpdate = () => {
    setEditEventId(null);
  };

  return (
    <div className="main-app">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/newevent"
            element={<EventForm onCreateEvent={handleCreateEvent} />}
          />
          <Route
            path="/eventlist"
            element={
              <EventList
                events={events}
                onDeleteEvent={handleDeleteEvent}
                onUpdateEvent={handleUpdateEvent}
                onEditEvent={handleEditEvent}
                onCancelUpdate={handleCancelUpdate}
                editEventId={editEventId}
              />
            }
          />
          <Route
            path="/edit/:eventId"
            element={
              <UpdateEventForm
                events={events}
                onUpdateEvent={handleUpdateEvent}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};
export default App;
