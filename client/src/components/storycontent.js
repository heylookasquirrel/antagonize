import React from 'react';

export class Storycontent extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="storyContent">
        {this.props.story.content}
      </div>
    )
  }
}
