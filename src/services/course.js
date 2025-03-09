import { fetchData } from './api';

// Fetch all courses
export const getAllCourses = async (params = {}) => {
  try {
    // Build the query string dynamically based on the params
    const query = new URLSearchParams(params).toString();
    console.log(query);
    const response = await fetchData(`/method/lms_api.api.get_course_list?${query}`);
    return response.message;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};


// Fetch a single course by ID
export const getCourseBySlug = async (slug) => {
  try {
    const response = await fetchData(`/method/lms_api.api.get_course_details?meta_title=${slug}`);
    return response.message;
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    throw error;
  }
};

export const getCourseCategories = async () => {
  try {
    const response = await fetchData(`/method/lms_api.api.get_course_category_data`);
    return response.message;
  } catch (error) {
    console.error(`Error fetching course:`, error);
    throw error;
  }
};