import React, { Component } from "react";

import styles from "./Card.module.css";
import up from "../images/up.svg";
import down from "../images/down.svg";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevstate) => ({
      counter: prevstate.counter + 1,
    }));
  };

  render() {
    const { image, name, cost ,id } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="smartphone" />
        <h3><Link to={`/Products/${id}`} >{name}</Link></h3>
        <p>{cost} {counter ? `* ${counter} = ${counter* parseFloat(cost)} `:"" }</p>
        <div className={styles.counter}>
          <img
            className={!counter ? styles.deactive: "" }
            src={down}
            alt="arrow"
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img onClick={this.upHandler} src={up} alt="arrow" />
        </div>
      </div>
    );
  }
}
