import React from 'react';

export class Storysummary extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="storySummary">
        {this.props.story.summary}
      </div>
    )
  }
}
