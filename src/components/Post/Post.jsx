import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} alt="post-image" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <div className="postTitle">
          <Link to="/post/:postId" className="link">
            {post.title}
          </Link>
        </div>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
