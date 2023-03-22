import React, { useState, useEffect } from "react";
import {Tweetbox} from "./Tweetbox";
import {Post} from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";

export function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsFromLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(postsFromLocalStorage);
  }, [posts]);

  return (
    <div className="feed">

      <Tweetbox />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
