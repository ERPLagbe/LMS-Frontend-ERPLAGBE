
// app/sitemap.js
const BASE_URL = 'https://jobayeracademy.com';

export default async function sitemap() {
  // Fetch dynamic courses
  const coursesRes = await fetch(
    'https://portal.jobayeracademy.com/api/method/lms_api.api.get_course_list?page=1'
  );
  const coursesData = await coursesRes.json();
  const courses = coursesData?.message?.courses.map((course) => ({
    url: `${BASE_URL}/course-detail/${course?.meta_title}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Fetch dynamic blogs
  const blogsRes = await fetch(
    'https://portal.jobayeracademy.com/api/method/lms_api.api.get_blog_list'
  );
  const blogsData = await blogsRes.json();
  const blogs = blogsData?.message?.blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog?.meta_title}`,
    lastModified: new Date(blog?.creation),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Static routes
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/courses',
    '/blogs',
    '/privacy-policy',
    '/refund-policy',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.5,
  }));

  return [...staticRoutes, ...courses, ...blogs];
}