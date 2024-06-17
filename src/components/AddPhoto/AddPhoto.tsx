import { useState } from "react";
import "./AddPhoto.scss";
import { addPhoto } from "../../apiService";

const AddPhoto = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      try {
        const response = await addPhoto(title, description, file);
        console.log("Photo added successfully:", response);
        props.onAddPhoto({
          photoId: response.photoId,
          uri: response.uri,
          title: response.title,
          description: response.description,
          createdDate: response.createdDate,
          userId: response.userId,
          likes: [],
          comments: [],
        });
      } catch (error) {
        console.error("Error adding photo:", error);
      }
    } else {
      alert("Please select a file to upload");
    }
    closeModal();
  };

  return (
    <div>
      <div className="button">
        <button className="btn btn-primary" onClick={openModal}>
          Add New Photo
        </button>
      </div>
      {isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Photo</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </label>
              <label>
                Photo:
                <input type="file" onChange={handleFileChange} />
              </label>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddPhoto;
