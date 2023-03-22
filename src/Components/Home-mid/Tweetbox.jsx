// import React, { useState, useEffect } from 'react'
// import ape from '../ape.jpg'
// import './Tweetbox.css'

// export function Tweetbox() {
//   const [tweet, setTweet] = useState([]);
//   const submitHandler=()=>{
    
//   }
//   return (
//     <div>
//       <form>
//         <div className='tweet-img'>
//           <img className='ape-img' src={ape} alt="loading" />
//         </div>
//         <div className='tweet-content'>
//           <input
//             type="text"
//             placeholder="What's happening"
//           />
//         </div>
//         <div className='tweet-below'></div>
//       </form>

//     </div>
//   )
// }

import React, { useState } from "react";
import "./Tweetbox.css";
// import ape from '../ape.jpg'
import {Avatar,Button} from 'antd'

export function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      displayName: "Parth Sharma",
      username: "Trikala",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://c8.alamy.com/zooms/9/f812ac99952345a885520b02b8007c25/2hcgdan.jpg",
    };

    localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar size='large' src={'https://c8.alamy.com/zooms/9/f812ac99952345a885520b02b8007c25/2hcgdan.jpg'} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button 
          onClick={sendTweet}
          type="primary"
          className="tweetBox__tweetButton"
        >
        Tweet    
        </Button>
      </form>
    </div>
  );
}

