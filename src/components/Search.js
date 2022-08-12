import React, { Component } from "react";

import styles from "./Search.module.css";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      search: event.target.value ,
    })
    }
  

  render() {
    return (
      <div className={styles.container}>
        <p> میان کالا ها </p>
        <div>
          <input type="text" value={this.state.search} onChange={this.changeHandler} placeholder="جستجو کن . . . " />
          <h4>{this.state.search}</h4>
        </div>
      </div>
    );
  }
}
