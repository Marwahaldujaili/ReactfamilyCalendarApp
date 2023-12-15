import React from "react";
import NavBar from "./NavBar";
import "./components.css";
import Typography from "@mui/material/Typography";
import calendarImage from "../media/renata-adrienn-ebvCsRypmxM-unsplash.jpg";
import { indigo } from "@mui/material/colors";

const headingColor = indigo[900];

function Home() {
  return (
    <div className="main-container">
      <NavBar />
      <div>
        <Typography variant="h2" color={headingColor}>
          Family Calendar
        </Typography>
        <img
          alt="Family Calendar"
          src={calendarImage}
          style={{ width: "400px", borderRadius: "10px", margin: "20px auto" }}
        />
        <p style={{ fontSize: "small", color: "grey", textAlign: "center" }}>
          “To do two things at once is to do neither.”
        </p>
      </div>
    </div>
  );
}

export default Home;
