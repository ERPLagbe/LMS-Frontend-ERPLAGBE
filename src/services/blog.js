import { fetchData } from './api';

// Fetch all Blog
export const getAllBlogs = async (params = {}) => {
  try {
    // Build the query string dynamically based on the params
    const query = new URLSearchParams(params).toString();
    const response = await fetchData(`/method/lms_api.api.get_blog_list?${query}`);
    return response.message;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};


// Fetch a single Blog by ID
export const getBlogBySlug = async (slug) => {
  try {
    const response = await fetchData(`/method/lms_api.api.get_blog_details?meta_title=${slug}`);
    return response.message;
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetchData(`/method/lms_api.api.get_blog_categories`);
    return response.message;
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    throw error;
  }
};

export const getBlogTags= async () => {
  try {
    const response = await fetchData(`/method/lms_api.api.get_blog_tags`);
    return response.message;
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    throw error;
  }
};