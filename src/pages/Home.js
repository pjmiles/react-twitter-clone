import SideBar from "../components/sidebar/SideBar";
import TweetBox from "../components/tweetBox/TweetBox";
import Widgets from "../components/widgets/Widgets";
import React from "react";

const Home = () => {
  return (
    <div>
      <SideBar />
      <TweetBox />
      <Widgets />
    </div>
  );
};

export default Home;
