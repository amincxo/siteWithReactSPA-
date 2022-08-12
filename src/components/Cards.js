import React, { Component } from "react";

import styles from "./Cards.module.css";
import Card from "./Card";

import iphone11promax from "../images/iphone 11 pro max.jpg";
import iphone11 from "../images/iphone11v2.jpg";
import iphonex from "../images/iphone x.jpg";
import iphonese2020 from "../images/iphone se2020.jpg";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      smartPhone: [
        { id:1, image: iphone11promax, name: "Iphone 11 pro max", cost: "58000" },
        { id:2, image: iphone11, name: "Iphone 11", cost: "48000" },
        { id:3, image: iphonex, name: "Iphone X", cost: "21000" },
        { id:4, image: iphonese2020, name: "Iphone SE 2020", cost: "14000" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={iphone11promax} name="Iphone 11 pro max" cost="58000" />
        <Card image={iphone11} name="Iphone 11" cost="48000" />
        <Card image={iphonex} name="Iphone X" cost="21000" />
        <Card image={iphonese2020} name="Iphone SE 2020" cost="14000" /> */}
        {this.state.smartPhone.map(phone => <Card key={phone.id} image={phone.image} id={phone.id} name={phone.name} cost={phone.cost} />)}
      </div>
    );
  }
}
