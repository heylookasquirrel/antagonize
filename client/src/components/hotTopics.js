import React from 'react';

export class HotTopics extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    topics : [
      {
        tag: "Love",
        popularity: 3
      }
    ]
  }

  render(){
    return (
      <section>
        <div className="tagsHeader">Hot Topics</div>
        <div className="tagsSort">
            <button>Last 24 Hours</button>
            <button>Last 3 days</button>
            <button>This Month</button>
            <button>This Year</button>
        </div>

        <div className="tags">
          {this.state.topics.map( (topic) =>{
              return ( <button> {topic.tag} </button>)
          })}
        </div>




      </section>
    )
  }
}
