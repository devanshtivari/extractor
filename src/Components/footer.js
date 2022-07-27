import React from 'react';
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import '../css/footer.css';
import {Link} from 'react-router-dom';

export default function footer() {
  return (
    <div className="footer">
      <hr className="footer-hr"/>
      <div className="icons">
        <Link to="/">
          <BottomNavigationAction className="icon" icon={<PublicRoundedIcon color="primary" fontSize="large"/>} />
        </Link>
        <Link to="/city">
          <BottomNavigationAction className="icon" icon={<TravelExploreRoundedIcon color="primary" fontSize="large"/>} />
        </Link>
        <Link to="/login">
          <BottomNavigationAction className="icon" icon={<AdminPanelSettingsRoundedIcon color="primary" fontSize="large"/>} />
        </Link>
      </div>
    </div>
  );
}
