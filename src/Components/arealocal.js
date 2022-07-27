import {Component} from 'react';
import * as React from 'react';
import Card from './card';
import Spinner from './spinner';
import '../css/area.css';
import "../css/header.css";
import axios from 'axios';

export class Arealocal extends Component {
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
        }
    }

    async componentDidMount(){
        await axios.get('http://localhost:5000/')
        .then(res=>{
            this.setState({loading: true})
            let parsedData = res.data;
            this.setState({loading: false});
            this.setState({articles: parsedData});
        })
    }

    render(){
        return (
          <>
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
          </>
        );
    }
}

export default Arealocal;