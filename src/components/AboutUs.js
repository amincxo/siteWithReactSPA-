import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () =>  {
    
    return (
      <div>
        <h1>درباره شرکت</h1>
        <br />

        <ul>
            <li><Link to="driver" > Drivers </Link></li>
            <li><Link to='programer' > Programers </Link></li>
        </ul>
        <br />

        <br />
        <p>lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm lerom apsorm </p>
        <Outlet />
      </div>
    )
  }
export default AboutUs;
