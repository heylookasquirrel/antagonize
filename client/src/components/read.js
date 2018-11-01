import React from 'react';
import { Header } from "./header"
import { Navbar } from "./navbar"
import { Breadcrumb } from "./breadcrumb"
import { Aboutauthor } from "./aboutauthor"
import { Storysummary } from "./storysummary"
import { Storycontent } from "./storycontent"
import { Sideinfo } from "./sideinfo"


let exampleUser = {
  name: "Squirrel",
  description: "Looking for adventure? Just follow me though my mind and find more than youre looking for",
  image: {
    src: "https://mylittlepony.hasbro.com/images/CharacterPageAvatar_MLP_rainbowdash.png"
  }
}

let exampleStory = {
  date:"05/12/2009",
  title: "Title Placeholder",
  catagory:"Testing",
  pages: 1,
  views: 123,
  recommended: 2,
  favs: 10,
  summary:"This is something we all saw coming",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export class Read extends React.Component{
  render(){
    return (
      <div>

      <Header/>
      <Navbar/>
      <main id="read">
        <div id="story">
          <Breadcrumb breadcrumb={
            ["Stories","Story Name"]
          }/>
          <div className="storyTitle">
            {exampleStory.title}
          </div>
          <Aboutauthor
          user={exampleUser}
          story={exampleStory}
          />
          <hr />
          <Storysummary story={exampleStory}/>
          <hr />
          <Storycontent story={exampleStory}/>
        </div>

        <aside>
          <Sideinfo story={exampleStory} user={exampleUser} />

          <div>

          </div>
        </aside>
      </main>


      </div>
    )
  }
}
