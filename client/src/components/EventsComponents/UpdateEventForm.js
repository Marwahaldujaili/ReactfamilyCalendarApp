import React, { useState, useEffect } from "react";
import "../components.css";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";

const headingColor = indigo[900];

const UpdateEventForm = ({ event, onUpdateEvent, onCancelUpdate }) => {
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);
  const [duration, setDuration] = useState(event.duration);
  const [description, setDescription] = useState(event.description);
  const [location, setLocation] = useState(event.location);
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(
    event.familyMember
  );
  const [selectedCategories, setSelectedCategories] = useState(
    event.categories
  );

  useEffect(() => {
    setTitle(event.title);
    setDate(event.date);
    setTime(event.time);
    setDuration(event.duration);
    setDescription(event.description);
    setLocation(event.location);
    setSelectedFamilyMember(event.familyMember);
    setSelectedCategories(event.categories);
  }, [event]);
  const familyMembers = [
    "The whole family",
    "Haider",
    "Marwah",
    "Rashed",
    "Nasser",
    "Yousef",
    "Basel",
  ];
  const categories = [
    "Doctor Appointment",
    "Birthday",
    "Celebration",
    "Play date",
    "Business",
    "Travel",
    "Family",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...event,
      title,
      date,
      time,
      duration,
      description,
      location,
      familyMember: selectedFamilyMember,
      categories: selectedCategories,
    };
    onUpdateEvent(updatedEvent);
  };

  const handleCancel = () => {
    onCancelUpdate();
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
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" color={headingColor}>
          Edit Event
        </Typography>
        <div className="myField">
          <TextField
            size="small"
            required
            type="text"
            id="title outlined-required"
            label="Upate the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="myField">
          <TextField
            type="date"
            id="date"
            label="Update the Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            type="time"
            value={time}
            id="time"
            label="Updat the Time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="myField">
          <Slider
            style={{ color: "orangered", width: "300px" }}
            aria-label="Duration"
            defaultValue={1}
            value={duration}
            step={1}
            hours
            min={1}
            max={8}
            valueLabelDisplay="auto"
            onChange={(e) => setDuration(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
        <Button
          sx={{ backgroundColor: "orangered" }}
          variant="contained"
          type="submit">
          Update Event
        </Button>
        <Button variant="outlined" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default UpdateEventForm;
