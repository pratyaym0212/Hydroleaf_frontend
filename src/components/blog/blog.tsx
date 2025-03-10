'use client';

import React from 'react';
import Image from 'next/image';
import blog1 from '../../../public/images/blog1.png';
import blog2 from '../../../public/images/blog2.png';
import blog3 from '../../../public/images/blog3.png';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: any;
  reverse: boolean;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'The Future of Hydroponics',
    content: 'Hydroponic farming is revolutionizing agriculture by reducing water usage and increasing yield. Learn how IoT and AI are enhancing this sustainable practice.',
    image: blog1,
    reverse: false,
  },
  {
    id: 2,
    title: 'How AI is Transforming Agriculture',
    content: 'AI-driven analytics are helping farmers optimize nutrient delivery, predict plant diseases, and improve crop quality like never before.',
    image: blog2,
    reverse: true,
  },
  {
    id: 3,
    title: 'Sustainable Farming with IoT',
    content: 'IoT sensors provide real-time data on temperature, humidity, and nutrient levels, making farming more efficient and eco-friendly.',
    image: blog3,
    reverse: false,
  },
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs">
      <div className="section-content">
        <h2>Latest Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className={`blog-container ${blog.reverse ? 'reverse' : ''}`}>
            <div className="blog-image-container">
              <Image src={blog.image} alt={blog.title} className="blog-image" width={500} height={300} />
            </div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;