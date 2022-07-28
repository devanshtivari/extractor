import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import * as React from "react";
// import "../css/search.css";
import Areasearch from './areaseach';

export default function Search() {

    const [search , setsearch] = React.useState();

    function check(e){
      if(e.keyCode === 13){
        console.log("Enter key is pressed : ",search);
        return <Areasearch city={search}/>
      }
    }
  return (
    <div className="search">
      <div className="search-box-outer">
        <input
          className="search-box"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          onKeyDown={(e) => {
            check(e)
          }}
          placeholder="Enter name of city"
        />
        <div className="search-button">
            <SearchOutlinedIcon color="primary" fontSize="large"/>
        </div>
      </div>
      <hr className="hr-search"/>
    </div>
  );
}
