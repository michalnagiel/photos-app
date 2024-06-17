import { useEffect, useState } from "react";
import { getPhotos } from "../../apiService";
import PhotoCard from "../PhotoCard/PhotoCard";
import AddPhoto from "../AddPhoto/AddPhoto";
import LoginForm from "../LoginForm/LoginForm";

import "./Photos.scss";

export default function Photos() {
  interface Comment {
    commentId: number;
    content: string;
    username: string;
    profilePhotoUri: string;
  }

  interface Photo {
    photoId: number;
    uri: string;
    title: string;
    description: string;
    createdDate: string;
    userId: number;
    likes: string[];
    comments: Comment[];
  }

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const result = await getPhotos();
        setPhotos(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching photos:", error);
          setError(error);
        } else {
          console.error("Unexpected error:", error);
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setLoadingPhotos(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleDeletePhotos = (photoId: number) => {
    setPhotos(photos.filter((photo) => photo.photoId !== photoId));
  };

  const handleAddPhoto = (newPhoto: Photo) => {
    setPhotos([...photos, newPhoto]);
  };

  const handleRefresh = () => {
    setPhotos(photos.filter((photo) => photo));
  };

  if (loadingPhotos) return <div>Loading Photos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderedPhotos = photos
    .map((photo) => (
      <PhotoCard
        key={photo.photoId}
        photoId={photo.photoId}
        img={photo.uri}
        userId={photo.userId}
        date={photo.createdDate}
        title={photo.title}
        text={photo.description}
        likes={photo.likes}
        comments={photo.comments}
        onDeletePhoto={handleDeletePhotos}
      />
    ))
    .reverse();

  return (
    <>
      <div className="login">
        <LoginForm onRefresh={handleRefresh} />
        {!!localStorage.getItem("username") ? (
          <AddPhoto onAddPhoto={handleAddPhoto} />
        ) : null}
      </div>
      {renderedPhotos}
    </>
  );
}
