import React, { Component } from "react";
import Rating from "@mui/material/Rating";
import "../css/card.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export class Card extends Component {
  render() {
    let { name, address, phone, rating, reviews, desc } = this.props;
    function flip() {
      // var card = document.getElementsbyClassName('card');
      // card.classList.toggle('is-flipped');
      console.log("the card was clicked");
    }
    return (
      <div className="box">
        <div className="box-inner">
          <div className="card_face card_face--front">
            <div className="heading-card">{name}</div>
            <hr className="hr-card" />
            <div className="sub-class">
              <Rating
                className="rating-star"
                name="read-only"
                value={rating}
                readOnly
              />
              <div className="card-reveiw">
                <div className="reveiws">{reviews}</div>
                <div className="text-reveiw">Reviews</div>
              </div>
            </div>
            <div className="phone">
              <div className="Phone-icon">
                <LocalPhoneIcon />
              </div>
              {phone}
            </div>
            <hr className="hr-card-1" />
            <div className="address">
              {address}
            </div>
          </div>
          <div className="card_face card_face--back">
            <div className="card-description">
              <div className="card-description-text">Description-</div>
              <div className="description">
                {desc}
              </div>
              <hr className="hr-card-1" />
              <div className="phone">
                <div className="Phone-icon">
                  <LocalPhoneIcon />
                </div>
                {phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
