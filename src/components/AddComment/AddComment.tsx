import { useState } from "react";
import { addComment } from "../../apiService";

import "./AddComment.scss";

const AddComment = (props: any) => {
  const handleAddComment = async () => {
    try {
      const response = await addComment(props.photoId, content);
      props.onAddComment({
        commentId: response.commentId,
        content: response.content,
        username: localStorage.getItem("username"),
        profilePhotoUri: "",
      });
    } catch (error) {
      console.error("Add comment error", error);
      alert(error);
    }
  };
  const [content, setContent] = useState("");
  return (
    <div className="input-group">
      <input
        className="form-control"
        placeholder="Your comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button className="btn btn-outline-primary btn-sm" onClick={handleAddComment}>
        Add comment
      </button>
    </div>
  );
};

export default AddComment;
