import React from 'react';

export class Activity extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    const { user, activity } = this.props.activity;

    switch (activity.type){
      case 'comment':
        return(
          <div className="activity">
            <img alt="avatar" />
            <div className="activityDetails">
              <div>{user} posted a comment on {activity.location}'s {activity.locationType} </div>
              <div>This is a comment left by me</div>
              <div>'time'</div>
            </div>
          </div>
        )
    }

  }
}
