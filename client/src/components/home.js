import React from 'react';
import { Header } from "./header"
import { Navbar } from "./navbar"
import { HomeBanner } from "./homebanner"
import { StoryList } from "./storyList"
import { HotTopics } from "./hotTopics"

export class Home extends React.Component{
  render(){
    return (
      <div>

      <Header/>
      <Navbar/>
      <HomeBanner/>
      <main>
        <StoryList/>
        <HotTopics/>
      </main>
      </div>
    )
  }
}
