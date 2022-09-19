import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { HiSearch } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const trends = [
  {
    id: 1,
    trend: "#Politics"
  },
  {
    id: 2,
    trend: "#Technology"
  },
  {
    id: 3,
    trend: "#History"
  },
  {
    id: 4,
    trend: "#Education"
  },
  {
    id: 5,
    trend: "#Celebrity"
  },
  {
    id: 6,
    trend: "#Global"
  },
  {
    id: 7,
    trend: "#Movies"
  },
  {
    id: 8,
    trend: "#Countries"
  },
  {
    id: 9,
    trend: "#Arts & Entertainment"
  },
  {
    id: 10,
    trend: "#Sports"
  },
]

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <HiSearch className="widgets-search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-container">
        <h2>What's happening</h2>
      {trends.map(({id, trend}) => {
        return (
          <ul key={id}>
            <li>{trend}</li>
          </ul>
        )
      })}
      {/* <TwitterTweetEmbed tweetId={"1521042297332375557"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="peterobi"
        options={{ height: 400 }}
      />
      <TwitterShareButton
        url={"https://facebook.com/saurabhnemade"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      /> */}
      </div>
    </div>
  );
};

export default Widgets;
