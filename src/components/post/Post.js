import "./Post.css";
import { BsPersonCircle } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";

const Post = () => {
  return (
    <div className="post">
      <div className="post-avatar">
        <BsPersonCircle className="post-avatar-icon" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              DisplayName
              <span className="post-header-special">
                <MdOutlineVerified className="post-badge" /> @username
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>This is a Message</p>
          </div>
        </div>
        <img
          src="https://c.tenor.com/h4vt2OwDR14AAAAM/excitement-guy.gif"
          alt=""
        />
        <div className="post-footer">
          <BiMessage />
          <AiOutlineRetweet />
          <FcLike />
          <FiShare />
        </div>
      </div>
    </div>
  );
};

export default Post;
