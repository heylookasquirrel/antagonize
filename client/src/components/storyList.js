import React from 'react';
import { Story } from "./story"

export class StoryList extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    stories : [
      {
        age: 1,
        user: "squirrel",
        votes: 4,
        title: "The Escape",
        catagory: "Thriller"
      },
      {
        age: 1,
        user: "squirrel",
        votes: 4,
        title: "The Escape",
        catagory: "Thriller"
      }
    ]
  }

  render(){
    return (
      <section className="list">
        <div className="listHeader">Recommend Works</div>
        <div className="listSort">
            <button>This Week</button>
            <button>All Time</button>
        </div>

        {this.state.stories.map( (story) =>{
            return ( <Story story={story} />)
        })}





      </section>
    )
  }
}
