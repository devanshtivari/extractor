import * as React from "react";
import "../css/header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import {useLocation } from "react-router-dom"
import Areasearch from "./areasearch";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {Link} from 'react-router-dom';
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";

export default function Header({setcity}) {
  const navigate = useNavigate();
  const location = useLocation();
  var [search, setsearch] = React.useState();

  function check(e) {
    if (e.keyCode === 13) {
      console.log("Enter key was pressed : ", search);
      console.log(location.pathname);
      console.log("Type of pathname is : ",typeof location.pathname);
      if(location.pathname === "/city"){
        console.log("you are in city path name");
        setcity(search);
      }
      else{
      navigate("/city");
      setcity(search);
      }
    }
  }

  return (
    <>
      <div className="heading">
        <div className="heading-text">Blog Page</div>
        <Link to="/login">
          <BottomNavigationAction
            className="header-icon"
            icon={
              <AdminPanelSettingsRoundedIcon color="primary" fontSize="large" />
            }
          />
        </Link>
        <hr />
      </div>
      <div className="search-box">
        <button className="btn-search">
          <SearchOutlinedIcon />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          onKeyDown={(e) => {
            check(e);
          }}
        />
      </div>
    </>
  );
}
