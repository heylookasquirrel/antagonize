import React from 'react';

export class Story extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="listStory">
        <div className="listVotes">
          <div>{this.props.story.votes}</div>
          <div>Votes</div>
        </div>
        <div className="listInfo">
          <div className="listCredit">Work by {this.props.story.user} in {this.props.story.catagory}</div>
          <div className="listTitle">{this.props.story.title}</div>
          <div className="listButtons">
            <button>'s'</button>
            <button>'l'</button>
            <button>'c'</button>
            <div></div>
            <div>Added {this.props.story.age} ago </div>
            <div>'buttons' </div>
          </div>
        </div>
      </div>
    )
  }
}
