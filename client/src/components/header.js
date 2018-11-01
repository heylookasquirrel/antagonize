import React from 'react';

export class Header extends React.Component{
  render(){
    return (
      <header>
        <div id="logo">
            <img alt="Antaganize"/>
        </div>
        <div>
            <input name="search" id="search" type="text" placeholder="Search"/>
        </div>
      </header>
    )
  }
}
