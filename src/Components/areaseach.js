import React, { Component } from "react";
import Card from "./card";
import Spinner from "./spinner";
import "../css/area.css";
import axios from "axios";

export class Arealocal extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await axios.get("http://localhost:3000/city" , {query: {"city": "chandigarh"}}).then((res) => {
      let parsedData = res.data;
      this.setState({ loading: false });
      this.setState({ articles: parsedData });
    });
  }

  render() {
    return (
      <div className="area">
        {this.state.loading && <Spinner />}
        {this.state.articles ? (
          this.state.articles.map((element) => {
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
    );
  }
}

export default Arealocal;
