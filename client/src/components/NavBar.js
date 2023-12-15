import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <nav className="navbar">
      <Link className="tooltip" to="/home">
        <FoundationOutlinedIcon />
        <span className="tooltiptext">Home</span>
      </Link>
      <Link className="tooltip" to="/newevent">
        <QueueOutlinedIcon />
        <span className="tooltiptext">New event</span>
      </Link>

      <Link className="tooltip" to="/eventlist">
        <DnsOutlinedIcon />
        <span className="tooltiptext">events list</span>
      </Link>
      {isHome && (
        <Link className="tooltip" to="/">
          <LockOpenOutlinedIcon />
          <span className="tooltiptext">Login</span>
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
