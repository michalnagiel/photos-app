import "./PhotoCard.scss";
import User from "../User/User";
import Comments from "../Comments/Comments";
import Likes from "../Likes/Likes";
import DeletePhoto from "../DeletePhoto/DeletePhoto";
import { useState } from "react";

const PhotoCard = (props: any) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeletePhoto = () => {
    setIsDeleted(true);
    props.onDeletePhoto();
  };
  if (isDeleted) return null;
  return (
    <div className="card">
      <div className="card-header">
        <div className="username-date">
          <User userId={props.userId} />
          <p className="date">{props.date.slice(0, 19).replace("T", " ")}</p>
        </div>
        {localStorage.getItem("userId") === props.userId.toString() ? (
          <DeletePhoto
            photoId={props.photoId}
            onDeletePhoto={handleDeletePhoto}
          />
        ) : null}
      </div>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="title-likes">
          <h3 className="card-title">{props.title}</h3>
          <Likes likes={props.likes} photoId={props.photoId} />
        </div>
        <p className="card-text">{props.text}</p>
        {<Comments comments={props.comments} photoId={props.photoId} />}
      </div>
    </div>
  );
};

export default PhotoCard;
