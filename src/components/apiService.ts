import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://ptbackend2024.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'text/plain',
  },
});

export const getPhotos = async () => {
  try {
    const response = await apiClient.get('/photos');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    } else {
      console.error('General error:', error);
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
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    } else {
      console.error('General error:', error);
    }
    throw error;
  }
};