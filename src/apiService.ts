import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ptbackend2024.azurewebsites.net/api",
  headers: {
    accept: "*/*",
  },
});

export const getPhotos = async () => {
  try {
    const response = await apiClient.get("/photos");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const getUser = async (userId: number) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get(`/users`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const postLogin = async (username: string, password: string) => {
  try {
    const response = await apiClient.post(`/auth/login`, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const likePhoto = async (photoId: number) => {
  try {
    const response = await apiClient.post(
      `/photos/${photoId}/like`,
      {},
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const unlikePhoto = async (photoId: number) => {
  try {
    const response = await apiClient.post(
      `/photos/${photoId}/unlike`,
      {},
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const addComment = async (photoId: number, content: string) => {
  try {
    const response = await apiClient.post(
      `/photos/${photoId}/comment`,
      { content: content },
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const response = await apiClient.delete(`/photos/comment/${commentId}`, {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const addPhoto = async (
  title: string,
  description: string,
  file: File
) => {
  const formData = new FormData();
  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("File", file);

  try {
    const response = await apiClient.post(`/photos`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const deletePhoto = async (photoId: number) => {
  try {
    const response = await apiClient.delete(`/photos/${photoId}`, {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};

export const signIn = async (username: string, email: string, password: string) => {
  try {
    const response = await apiClient.post(
      `auth/register`,
      { username: username, email: email, password: password },
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};