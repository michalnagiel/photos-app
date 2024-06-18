import { deletePhoto } from "../../apiService";

interface DeletePhotoProps {
  photoId: number;
  onDeletePhoto: (photoId: number) => void;
}

const DeletePhoto = (props: DeletePhotoProps) => {
  const handleDeletePhoto = async (): Promise<void> => {
    try {
      await deletePhoto(props.photoId);
      props.onDeletePhoto(props.photoId);
    } catch (error) {
      console.error("Delete photo error", error);
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
