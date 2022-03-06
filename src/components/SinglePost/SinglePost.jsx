import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getSinglePost = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BLOG_URL}/posts/${path}`
      );
      setPost(res.data);
    };
    getSinglePost();
  });
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={post.photo}
            alt="single-page-details"
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <strong>{post.username}</strong>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
