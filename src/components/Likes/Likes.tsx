import { useState } from "react";
import { likePhoto, unlikePhoto } from "../../apiService";

const Likes = (props: any) => {
  const findUsername = (like: any) =>
    like.username === localStorage.getItem("username");
  const [like, setLike] = useState(
    props.likes.some(findUsername) ? "❤️" : "🤍"
  );
  const [numberOfLikes, setNumberOfLikes] = useState(props.likes.length);

  function likeClicked() {
    if (like === "🤍") {
      setLike("❤️");
      likePhoto(props.photoId);
      setNumberOfLikes(numberOfLikes + 1);
    } else {
      setLike("🤍");
      unlikePhoto(props.photoId);
      setNumberOfLikes(numberOfLikes - 1);
    }
  }
  return (
    <div className="title-like">
      <p className="like" onClick={likeClicked}>
        {like} {numberOfLikes}
      </p>
    </div>
  );
};

export default Likes;
