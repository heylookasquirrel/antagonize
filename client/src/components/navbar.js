import React from 'react';

export class Navbar extends React.Component{
  render(){
    return (
      <nav>
        <ul id="firstMenu">
          <li>Home</li>
          <li>Sign Up!</li>
          <li>Write</li>
          <li>Explore</li>
          <li>Activity</li>
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
