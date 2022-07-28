import * as React from "react";
import axios from "axios";
import Card from './card';
import '../css/area.css';
import Spinner from './spinner';

export default function Fetchfunction(){
    const[articles , setarticles] = React.useState([]);
    const[loading , setloading] = React.useState(false);

    React.useEffect(() =>{
        const fetchData = async() => {
            setloading(true);
            const response = await axios.get("http://localhost:5000/");
            console.log("the response is : ",response);
            console.log("The typeof response is : ",typeof response);
            const data = await response.data;
            console.log("The data is json is : ",data);
            console.log("the typeof data is : ",typeof data);
            setarticles(data);
            setloading(false);
        }
        fetchData()
    } , [])

    return (
      <>
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