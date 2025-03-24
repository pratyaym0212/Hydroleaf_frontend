'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  reverse: boolean;
}

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Videos:', data); // Debugging line
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos">
      <div className="video-content">
        <h2>The Hydroponics World</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail-container">
                <Image
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="absolute left-0 top-0 size-full rounded-lg object-cover"
                  width={400}
                  height={225}
                  priority
                />
              </div>
              <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
