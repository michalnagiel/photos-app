import { useState, useEffect } from "react";
import { getUser } from "../../apiService";

export default function User(props: any) {
  interface Photo {
    photoId: number;
    uri: string;
    title: string;
    description: string;
    createdDate: Date;
  }

  interface User {
    userId: number;
    username: string;
    profilePhotoUri: string;
    photos: Photo[];
    likes: string[];
    comments: string[];
  }

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await getUser(props.userId);
        setUser(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching user:", error);
          setError(error);
        } else {
          console.error("Unexpected error:", error);
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [props.userId]);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <p className="username">{user ? user.username : error}</p>;
}
