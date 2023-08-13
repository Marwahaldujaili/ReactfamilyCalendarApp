import React, { useState } from "react";
import NavBar from "../NavBar";
import "../components.css";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";


const headingColor = indigo[900];

const EventForm = ({ onCreateEvent }) => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const defaultTime = "08:00";

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState(defaultTime);
  const [duration, setDuration] = useState(1);
  const [Notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFamilyMember, setSelectedFamilyMember] =
    useState("The whole family");

  const familyMembers = [
    "The whole family",
    "Haider",
    "Marwah",
    "Rashed",
    "Nasser",
    "Yousef",
    "Basel",
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = [
    "Doctor Appointment",
    "Birthday",
    "Celebration",
    "Play date",
    "Business",
    "Travel",
    "Family",
  ];
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: uuidv4(),
      title,
      date,
      time,
      duration,
      Notes,
      location,
      familyMember: selectedFamilyMember,
      categories: selectedCategories,
    };
    onCreateEvent(event);
    setTitle("");
    setDate("");
    setTime("");
    setDuration(1);
    setNotes("");
    setLocation("");
    setSelectedFamilyMember("");
    setSelectedCategories([]);

    setEventCreated(true);
  };

  const handleDurationChange = (e) => {
    setDuration(parseInt(e.target.value));
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;
    setSelectedCategories((prevSelectedCategories) => {
      if (isChecked) {
        return [...prevSelectedCategories, category];
      } else {
        return prevSelectedCategories.filter(
          (prevCategory) => prevCategory !== category
        );
      }
    });
  };

  return (
    <div className="main-container">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" color={headingColor}>
          Add a new family event
        </Typography>

        <div className="myField">
          <TextField
            style={{ width: "400px" }}
            required
            type="text"
            id="title outlined-required"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="myField">
          <TextField
            style={{ width: "200px" }}
            type="date"
            id="date"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            style={{ width: "200px" }}
            type="time"
            id="time"
            label="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="myField">
          <Slider
            style={{ color: "orangered", width: "400px" }}
            aria-label="Duration"
            defaultValue={1}
            value={duration}
            step={1}
            min={1}
            max={8}
            valueLabelDisplay="auto"
            onChange={handleDurationChange}
          />
          <p>{duration} hour(s)</p>
        </div>
        <div className="myField">
          <TextField
            style={{ width: "400px" }}
            type="text"
            id="location"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="myField">
          <InputLabel id="demo-simple-select-helper-label">
            Family member
          </InputLabel>

          <Select
            style={{ width: "400px" }}
            value={selectedFamilyMember}
            onChange={(e) => setSelectedFamilyMember(e.target.value)}>
            {familyMembers.map((member) => (
              <MenuItem key={member} value={member}>
                {member}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="myField">
          <TextField
            style={{ width: "400px" }}
            id="Notes standard-multiline-static"
            label="Notes"
            multiline
            rows={4}
            value={Notes}
            onChange={(e) => setNotes(e.target.value)}></TextField>
        </div>
        <div style={{ width: "400px" }} className="myField">
          {categories.map((category) => (
            <span key={category}>
              <Checkbox
                type="checkbox"
                id={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </span>
          ))}
        </div>
        <div>
          <Button
            sx={{ backgroundColor: "orangered" }}
            variant="contained"
            type="submit">
            Create
          </Button>
        </div>
        {eventCreated && (
          <Alert severity="success">
            Your event have been successfully created!
          </Alert>
        )}
      </form>
    </div>
  );
};

export default EventForm;
