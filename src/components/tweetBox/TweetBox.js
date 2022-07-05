import './TweetBox.css'

const TweetBox = () => {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <img className="tweet-box-image" alt="imag"/>
          <input 
          type="text" 
          placeholder="what's happening"
          />
        </div>
        <input 
          type="text" 
          className="tweet-box-input"
          placeholder="optional: Enter image URL"
          />
          <button className="tweet-box-tweet-btn">Tweet</button>
      </form>
    </div>
  );
};

export default TweetBox;
