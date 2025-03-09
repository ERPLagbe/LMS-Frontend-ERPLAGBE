import axios from 'axios';

// Create an Axios instance with base configuration from environment variables
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,  // Using env variable for base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': process.env.NEXT_PUBLIC_TOKEN || '', // Ensure token is present
  }
});

// Request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Optionally set token here if needed
//     const token = process.env.NEXT_PUBLIC_TOKEN;
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('API Error:', error);
//     return Promise.reject(error);
//   }
// );

// Function to make a GET request
export const fetchData = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

// Function to make a POST request
export const postData = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};

// Example usage in Next.js page or component
export const exampleFetch = async () => {
  try {
    const data = await fetchData('/example-endpoint');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
