import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { HiSearch } from "react-icons/hi";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <HiSearch className="widgets-search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-container">
        <h2>What's happening</h2>
      
      <TwitterTweetEmbed tweetId={"1521042297332375557"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="peterobi"
        options={{ height: 400 }}
      />
      <TwitterShareButton
        url={"https://facebook.com/saurabhnemade"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      />
      </div>
    </div>
  );
};

export default Widgets;
