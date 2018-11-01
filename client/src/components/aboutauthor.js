import React from 'react';

export class Aboutauthor extends React.Component{

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className="aboutAuthor">

        <div className="aboutPicture">
          <img src={this.props.user.image.src} alt="Avatar"/>
        </div>
        <div>
          <div className="aboutTimestamp">
            Page Published by {this.props.user.name} on {this.props.story.date}
          </div>
          <hr />
          <div className="aboutDescription">
            <b>About the Author:</b> {this.props.user.description}
          </div>
          <div className="aboutButtons">
            <button>Recommend</button>
            <button>Favourite</button>
            <span></span>
            <button>Share</button>
          </div>
        </div>

      </div>
    )
  }
}
