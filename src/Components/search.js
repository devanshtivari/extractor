import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import * as React from "react";
import "../css/search.css";

export default function Search() {

    const [search , setsearch] = React.useState();
  return (
    <div className="search">
      <div className="search-box-outer">
        <input
          className="search-box"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          placeholder="Enter name of city"
        />
        <div className="search-button">
            <SearchOutlinedIcon color="primary" fontSize="large"/>
        </div>
      </div>
      <hr />
    </div>
  );
}
