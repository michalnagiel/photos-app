import { deleteComment } from "../../apiService";

import "./Comment.scss";

interface CommentData {
  commentId: number;
  content: string;
  username: string;
  profilePhotoUri: string;
  onDeleteComment: (commentId: number) => void;
}

export default function Comment(props: CommentData) {
  const handleDeleteComment = async (): Promise<void> => {
    try {
      await deleteComment(props.commentId);
      props.onDeleteComment(props.commentId);
    } catch (error) {
      console.error("Delete comment error", error);
      alert(error);
    }
  };

  return (
    <div className="comment">
      <div>
        <b>{props.username} </b>
        <i>{props.content}</i>
      </div>
      {props.username === localStorage.getItem("username") ? (
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDeleteComment}
        >
          Delete comment
        </button>
      ) : null}
    </div>
  );
}
