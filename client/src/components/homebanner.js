import React from 'react';

export class HomeBanner extends React.Component{
  render(){
    return (
      <div id="homeBanner">
          <div className="bannerImage">

          </div>
          <div className="bannerText">
            Antaganize is a place you can create
            without knowing how to spell, holy heck
            we dont provide a spellcheck.
            so you are on your own
            <div className="bannerButtonHolder">
              <div className="bannerButton green">
                Join Antaganize
              </div>
              <div className="bannerButton">
                Login
              </div>
            </div>
          </div>
        </div>
    )
  }
}
