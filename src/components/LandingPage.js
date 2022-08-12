import React, { Component } from 'react'

import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Logos from './Logos';

export default class LandingPage extends Component {
  render() {
    return (
        <div>
          <Banner />
          <Cards />
          <Search />
          <Logos />      
        </div>
    )
  }
}
