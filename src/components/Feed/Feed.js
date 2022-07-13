import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import SideBar from "../sidebar/SideBar";
import Widgets from "../widgets/Widgets";

const Feed = () => {
  return (
    <>
    <SideBar />
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <TweetBox />
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    <Widgets />
    </>
  );
};

export default Feed;
