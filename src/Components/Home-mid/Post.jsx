// import React, { forwardRef, useState } from "react";
// import "./Post.css";
// import { Avatar } from "antd";
// import {CheckCircleOutlined ,MessageOutlined,RetweetOutlined,HeartOutlined ,VerticalAlignTopOutlined  } from '@ant-design/icons'

// export const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
//     const handleLike = () => {
//       const storedPosts = JSON.parse(localStorage.getItem("posts"));
//       const updatedPosts = storedPosts.map((post) => {
//         if (post.text === text) {
//           return { ...post, likes: post.likes + 1 };
//         }
//         return post;
//       });
//       localStorage.setItem("posts", JSON.stringify(updatedPosts));
//     };

//   const [comment,setComment]=useState('');
//   const commentHandler = (e) => {
//     //e.preventDefault
//     //update the state here
//     this.setState({
//         comments: [...this.state.comments, newComment]
//     });
// } 
// console.log(comment);



//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && <CheckCircleOutlined className="post__badge" />} @
//                   {username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           {image && (
//             <img className="post__image" src={image} style={{height:'100%' ,width:'100%'}} alt="post" />
//           )}
//           <div className="post__footer">
//             <MessageOutlined onClick ={commentHandler} fontSize="small" />
//             <RetweetOutlined  fontSize="small" />
//             <HeartOutlined 
//               fontSize="small"
//               onClick={handleLike}
//               className="post__likeButton"
//             />
//             {/* <span>{localStorage.getItem("likes")|| 0}</span> */}
//             <span>{localStorage.getItem("likes")|| 0}</span>

//             <VerticalAlignTopOutlined  fontSize="small" />
//           </div>
//           <div className="commentSection" onclick={commentHandler} style={{visibility:'hidden'}}>

//             <h3>{comment}</h3>
//             <input type="text" onChange={(e)=>setComment(e.target.value)}/>

//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// import React, { forwardRef, useState } from "react";
// import "./Post.css";
// import { Avatar } from "antd";
// import {
//   CheckCircleOutlined,
//   MessageOutlined,
//   RetweetOutlined,
//   HeartOutlined,
//   VerticalAlignTopOutlined,
// } from "@ant-design/icons";

// export const Post = forwardRef(
//   (
//     { displayName, username, verified, text, image, avatar,  },
//     ref
//   ) => {
//     const handleLike = () => {
//       const storedPosts = JSON.parse(localStorage.getItem("posts"));
//       const updatedPosts = storedPosts.map((post) => {
//         if (post.text === text) {
//           return { ...post, likes: post.likes + 1 };
//         }
//         return post;
//       });
//       localStorage.setItem("posts", JSON.stringify(updatedPosts));
//     };

//     const [comment, setComment] = useState("");
//     const [showComments, setShowComments] = useState(false);
//     const [postComments, setPostComments] = useState({name:'parth'});

//     const commentHandler = () => {
//       setShowComments(!showComments);
//     };

//     const addComment = () => {
//       const newComment = {
//         username: "Trikala",
//         text: {comment},
//       };
//       const updatedComments = [...postComments, newComment];
//       setPostComments(updatedComments);
//       setComment("");
//     };

//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && (
//                     <CheckCircleOutlined className="post__badge" />
//                   )}{" "}
//                   @{username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           {image && (
//             <img
//               className="post__image"
//               src={image}
//               style={{ height: "100%", width: "100%" }}
//               alt="post"
//             />
//           )}
//           <div className="post__footer">
//             <MessageOutlined
//               onClick={commentHandler}
//               fontSize="small"
//               style={{ color: showComments ? "#1DA1F2" : "#808080" }}
//             />
//             <RetweetOutlined fontSize="small" />
//             <HeartOutlined
//               fontSize="small"
//               onClick={handleLike}
//               className="post__likeButton"
//             />
//             <span>{localStorage.getItem("likes") || 0}</span>
//             <VerticalAlignTopOutlined fontSize="small" />
//           </div>
//           {showComments && (
//             <div className="commentSection">
//               <div className="addComment">
//                 <input
//                   type="text"
//                   placeholder="Add a comment..."
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                 />
//                 <button onClick={addComment}>Post</button>
//               </div>
//               {postComments.map((comment, index) => (
//                 <div key={index} className="comment">
//                   <span className="comment__username">{comment.username}</span>
//                   <span className="comment__text">{comment.text}</span>
//                 </div>
//               ))}

//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// );


import React, { forwardRef, useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "antd";
import { CheckCircleOutlined, MessageOutlined, RetweetOutlined, HeartOutlined, VerticalAlignTopOutlined } from '@ant-design/icons'

export const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {

    const [like, setLike] = useState(0);
    useEffect(() => {
      const kuchbhi = localStorage.getItem('inc');

      if (kuchbhi) {
        setLike(parseInt(kuchbhi))
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('inc', like);
    }, [like]);

    const [comment, setComment] = useState('');

    useEffect(() => {
      const again = localStorage.getItem('com');

    })
    const handleLike = () => {
      setLike(like + 1);
    }
    // const handleLike = () => {
    //   const storedPosts = JSON.parse(localStorage.getItem("posts"));
    //   const updatedPosts = storedPosts.map((post) => {
    //     if (post.text === text) {
    //       return { ...post, likes: post.likes + 1 };
    //     }
    //     return post;
    //   });
    //   localStorage.setItem("posts", JSON.stringify(updatedPosts));
    //   // setLike(store);
    // };
    // const [tr]
    const commentHandler = () => {
      // e.preventDefault
      const open = document.querySelector('.commentSection').style.visibility = 'visible';
      // comment 
    }
    // console.log(comment);


    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <CheckCircleOutlined className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && (
            <img className="post__image" src={image} style={{ height: '100%', width: '100%' }} alt="post" />
          )}
          <div className="post__footer">
            <MessageOutlined onClick={commentHandler} fontSize="small" />
            <RetweetOutlined fontSize="small" />
            <HeartOutlined
              fontSize="small"
              onClick={handleLike}
              className="post__likeButton"
            />
            {/* <span>{localStorage.getItem("likes") || 0}</span> */}
            <span>{like}</span>

            <VerticalAlignTopOutlined fontSize="small" />
          </div>
          <div className="commentSection" onclick={commentHandler} style={{ visibility: 'hidden' }}>
            <div className="comment-show">

              <h3>{comment}</h3>
            </div>
            <input 
              type="text" 
              onChange={(e) => setComment(e.target.value)} 
              onKeyDown={(e)=>{
                if(e.key==='Enter'){

                  setComment(e.target.value)}}  
                }
            />

          </div>
        </div>
      </div>
    );
  }
);  