import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const POSTS = Array.from(Array(10)); // TODO: Fetch blog posts from API

const Blog: React.FC<Props> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      This is blog
      {POSTS.map((_, i) => (
        <Link to={`/blog/${i}`}>
          <img
            style={{ width: 200, height: 200 }}
            src={`https://source.unsplash.com/1600x900/?${i}`}
            alt="test"
          />
          Post
        </Link>
      ))}
    </div>
  );
};

export default Blog;
