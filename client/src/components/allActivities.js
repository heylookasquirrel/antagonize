import React from 'react';
import { Header } from "./header"
import { Navbar } from "./navbar"
import { Breadcrumb } from "./breadcrumb"
import { Activity } from "./activity"

let activities = {
  user: "Squirrel",
  activity: {
    type: "comment",
    location: "ExampleUsers",
    locationType: "Profile"
  }

}

export class AllActivities extends React.Component{
  render(){
    return (
      <div>

      <Header/>
      <Navbar/>
      <main id="read">
        <div>
          <Breadcrumb  breadcrumb={
            ["Activity","Recent Activity"]
          }/>
          <div className="storyTitle">All site Activity</div>
          <div className="titleHeadline">All activity on Protagonize for the last week.</div>

          <div className="activitySelector">
            <div className="activityButtons">
              <button>Everyone</button>
              <button>Comments</button>
              <button>New works & Pages</button>
              <button>Recommended Works</button>
            </div>
            <div className="activityStats">
              <div>1-50 of 'totalEntries'</div>
              <span />
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          </div>

          <div className="activityTime">
            Today
            <hr/>
          </div>

          <div className="activityContainer">

            <Activity activity={activities} />

            <hr/>
          </div>

        </div>
      </main>
      </div>
    )
  }
}
