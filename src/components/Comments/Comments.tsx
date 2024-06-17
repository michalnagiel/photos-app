import { useState } from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";

import "./Comments.scss";

export default function Comments(props: any) {
  const [comments, setComments] = useState<any[]>(props.comments);

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter((comment) => comment.commentId !== commentId));
  };

  const handleAddComment = (newComment: any) => {
    setComments([...comments, newComment]);
  };

  const renderedComments = comments.map((comment) => (
    <Comment
      key={comment.commentId}
      commentId={comment.commentId}
      content={comment.content}
      username={comment.username}
      profilePhotoUri={comment.profilePhotoUri}
      onDeleteComment={handleDeleteComment}
    />
  ));

  return (
    <>
      <div className="comments">
        <h6>Comments</h6>
        {comments.length ? <div>{renderedComments}</div> : null}
        {!!localStorage.getItem("username") ? <AddComment photoId={props.photoId} onAddComment={handleAddComment}/> : null}
      </div>
    </>
  );
}
