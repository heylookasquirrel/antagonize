import React from 'react';
import { NavLink , Link } from 'react-router-dom'

export class Navbar extends React.Component{
  render(){
    return (
      <nav>
        <ul id="firstMenu">
          <NavLink to="/"><li>Home</li></NavLink>
          <li>Sign Up!</li>
          <li>Write</li>
          <li>Explore</li>
          <NavLink to="/activity"><li>Activity</li></NavLink>
        </ul>
        <ul>
          <li>Login</li>
          <li>Help</li>
          <img alt="icon"/>
        </ul>
        </nav>
    )
  }
}
