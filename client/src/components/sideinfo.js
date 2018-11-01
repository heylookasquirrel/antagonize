import React from 'react';

export class Sideinfo extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="sideInfo">
        <div className="sideTitlebar"> The Goods</div>
        <div className="sideCatagory">
          <div>Filed Under</div>
          <div>{this.props.story.catagory}</div>
        </div>

        <div className="sideDescription">
          <div>
            You're currently reading the {this.props.story.type} {this.props.story.title} which was posted on {this.props.story.date} by {this.props.user.name}
          </div>
          <img src={this.props.user.image.src} alt="sideAvatar" />
        </div>
        <div className="sideStats">
          <div className="sideStatsBox">
            <div>{this.props.story.pages}</div>
            <div>Pages</div>
          </div>
          <div className="sideStatsBox">
            <div>{this.props.story.views}</div>
            <div>Views</div>
          </div>
          <div className="sideStatsBox">
            <div>{this.props.story.recommended}</div>
            <div>Recs</div>
          </div>
          <div className="sideStatsBox">
            <div>{this.props.story.favs}</div>
            <div>Faves</div>
          </div>
        </div>
      </div>
    )
  }
}
