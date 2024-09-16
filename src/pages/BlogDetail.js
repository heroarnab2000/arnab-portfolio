import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function BlogDetail({ match }) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios.get(`/api/blogs/${match.params.id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error('Error fetching blog detail:', error));
  }, [match.params.id]);

  return (
    <section>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </section>
  );
}

export default BlogDetail;
