import * as React from "react";
import axios from "axios";
import "../css/search.css";
import "../css/area.css";
import Spinner from "./spinner";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Card from "./card";

export default function Areasearch() {
    const[search , setsearch] = React.useState();
    const[articles , setarticles] = React.useState({});
    const[loading , setloading] = React.useState(false);

    function Check(e){
        if(e.keyCode === 13){
            console.log("enter key is pressed : ",search);
            Datadisplay();
        }
    }

    const Datadisplay = () => {
         React.useEffect(() => {
          dataFetch();
        }, []);
    }

    const dataFetch = async() => {
        await axios.get(`http://localhost:3000/city?city=chandigarh`)
        .then(res => {
            setloading(true);
            let parsedData = res.data;
            console.log(parsedData);
            console.log(typeof parsedData);
            parsedData = parsedData.json();
            setloading(false);
            setarticles(parsedData);
        })
    }

    return (
      <>
        <div className="search">
          <div className="search-box-outer">
            <input
              className="search-box"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              onKeyDown={(e) => {
                Check(e);
              }}
              placeholder="Enter name of city"
            />
            <div className="search-button">
              <SearchOutlinedIcon color="primary" fontSize="large" />
            </div>
          </div>
          <hr className="hr-search" />
        </div>
        <div className="area">
          {loading && <Spinner />}
          {articles ? (
            articles.map((element) => {
              return (
                <Card
                  key={element.Phone}
                  name={element.Name}
                  address={element.Address}
                  phone={element.Phone}
                  rating={element.Ratings}
                  reviews={element.Reviews}
                  desc={element.Description}
                />
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </>
    );
}