import React from 'react';

export class Sidetags extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="sideTags">
        <div className="sideTagsTitlebar"> Tags</div>
        <hr/>
        <div className="sideTagsContainer">
          <div>IC</div>
          <div>
            {this.props.story.tags.map( (tag)=>{
              return (<button>{tag}</button>)
            })}
          </div>
        </div>
      </div>
    )
  }
}
