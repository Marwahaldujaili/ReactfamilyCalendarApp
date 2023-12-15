import React, { useState } from "react";
import UpdateEventForm from "./UpdateEventForm";
import NavBar from "../NavBar";
import "../components.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";

const headingColor = indigo[900];

const EventList = ({ events, onDeleteEvent, onUpdateEvent }) => {
  const [editEventId, setEditEventId] = useState(null);

  const handleDelete = (eventId) => {
    onDeleteEvent(eventId);
  };

  const handleEdit = (eventId) => {
    setEditEventId(eventId);
  };

  const handleUpdate = (updatedEvent) => {
    onUpdateEvent(updatedEvent);
    setEditEventId(null);
  };

  const handleCancelEdit = () => {
    setEditEventId(null);
  };
  const handleShareEvent = (event) => {
    const subject = encodeURIComponent(
      `New event on the calendar: ${event.title} for ${event.familyMember}`
    );
    const body = encodeURIComponent(
      `Event details:\n\nTitle: ${event.title}\nFor:${event.familyMember}\nDate: ${event.date}\nTime: ${event.time}\nDuration: ${event.duration} hours\nDescription: ${event.description}\nLocation: ${event.location}`
    );
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div>
        <Typography variant="h5" color={headingColor}>
          Your upcoming events
        </Typography>

        {events.length === 0 ? (
          <p>Nothing on the calendar yet!</p>
        ) : (
          <Card sx={{ minWidth: 275, mb: "10px" }}>
            {events.map((event) => (
              <CardContent key={event.id}>
                <Typography variant="h5" sx={{ color: "orangered" }}>
                  {event.title} for {event.familyMember}
                </Typography>
                <Typography sx={{ marginTop: "5px" }} color="text.secondary">
                  on: {event.date} at: {event.time} for {event.duration} hours
                </Typography>
                <Typography sx={{ marginBottom: "5px" }} color="text.secondary">
                  Location: {event.location}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Notes: {event.description}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ marginBottom: "5px" }}
                  color="text.secondary">
                  {" "}
                  {event.categories.join(", ")}{" "}
                </Typography>

                {editEventId === event.id ? (
                  <UpdateEventForm
                    event={event}
                    onUpdateEvent={handleUpdate}
                    onCancelUpdate={handleCancelEdit}
                  />
                ) : (
                  <>
                    <Button
                      sx={{ margin: "5px" }}
                      variant="contained"
                      size="small"
                      onClick={() => handleEdit(event.id)}>
                      Edit Event
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleDelete(event.id)}>
                      Delete
                    </Button>
                    <Button onClick={() => handleShareEvent(event)}>
                      <ForwardToInboxRoundedIcon variant="contained" />
                    </Button>
                  </>
                )}
              </CardContent>
            ))}
          </Card>
        )}
      </div>
    </div>
  );
};

export default EventList;
