import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs')
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <section>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <a href={`/blogs/${blog._id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;
