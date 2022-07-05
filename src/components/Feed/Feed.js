import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
