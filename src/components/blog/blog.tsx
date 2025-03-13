'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  reverse: boolean;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Blogs:', data); // Debugging line
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs">
      <div className="section-content">
        <h2>Latest Blogs</h2>
        {blogs.map((blog) => (
          // ✅ FIX: Move key to the outermost div
          <div key={blog.id} className="blog-wrapper">
            <div className={`blog-container ${blog.reverse ? 'reverse' : ''}`}>
              <div className="blog-image-container">
                <Image
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="blog-image"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
