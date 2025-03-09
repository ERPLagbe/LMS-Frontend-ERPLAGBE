import { fetchData } from './api';

// Fetch all Blog
export const getGallery = async () => {
  try {
    // Build the query string dynamically based on the params
    const response = await fetchData(`/method/lms_api.api.get_gallery_list`);
    return response.message;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};
