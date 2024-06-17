import { deletePhoto } from "../../apiService";

const DeletePhoto = (props: { photoId: number; onDeletePhoto: Function }) => {
  const handleDeletePhoto = async () => {
    try {
      deletePhoto(props.photoId);
      props.onDeletePhoto(props.photoId);
    } catch (error) {
      console.error("Add comment error", error);
      alert(error);
    }
  };
  return (
    <>
      <button className="btn btn-danger btn-sm" onClick={handleDeletePhoto}>
        Delete Photo
      </button>
    </>
  );
};

export default DeletePhoto;
