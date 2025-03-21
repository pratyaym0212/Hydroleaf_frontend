'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
};

type Video = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  reverse: boolean;
};

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [reverse, setReverse] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [blogId, setBlogId] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState<'blogs' | 'videos'>('blogs'); // Track the current tab

  // Fetch Blogs and Videos
  const fetchBlogs = async () => {
    const response = await fetch('/api/blog');
    if (response.ok) {
      const data: Blog[] = await response.json();
      setBlogs(data);
    }
  };

  const fetchVideos = async () => {
    const response = await fetch('/api/videos');
    if (response.ok) {
      const data: Video[] = await response.json();
      setVideos(data);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchVideos();
  }, []);

  const handleBlogCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please enter title and content.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('reverse', String(reverse));

    if (file) {
      formData.append('file', file); // If an image file is selected
    }

    const response = await fetch('/api/blog', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Blog created successfully!');
      setTitle('');
      setContent('');
      setFile(null);
      setPreview(null);
      setReverse(false);
      fetchBlogs();
    } else {
      alert('Failed to create blog.');
    }
  };
  const handleBlogEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogId) {
      alert('Please enter a Blog ID to edit.');
      return;
    }
    const formData = new FormData();
    formData.append('id', String(blogId));
    formData.append('title', title);
    formData.append('content', content);
    if (file) formData.append('file', file);
    formData.append('reverse', String(reverse));

    const response = await fetch('/api/blog', {
      method: 'PATCH',
      body: formData,
    });

    if (response.ok) {
      alert('Blog updated!');
      setTitle('');
      setContent('');
      setFile(null);
      setPreview(null);
      setReverse(false);
      setBlogId(null);
      fetchBlogs();
    } else {
      alert('Failed to update blog.');
    }
  };
  const handleVideoCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) {
      alert('Please provide a video URL.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('videoUrl', String(videoUrl));
    formData.append('reverse', String(reverse));

    if (videoFile) {
      formData.append('thumbnail', videoFile);
    }

    const response = await fetch('/api/videos', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Video created successfully!');
      setVideoUrl('');
      setVideoFile(null);
      setVideoPreview(null);
      setReverse(false);
      fetchVideos();
    } else {
      alert('Failed to create video.');
    }
  };

  const handleBlogDelete = async (id: number) => {
    const response = await fetch('/api/blog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      alert('Blog deleted successfully!');
      fetchBlogs();
    } else {
      alert('Failed to delete blog.');
    }
  };

  const handleVideoDelete = async (id: number) => {
    const response = await fetch('/api/videos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      alert('Video deleted successfully!');
      fetchVideos();
    } else {
      alert('Failed to delete video.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedVideoFile = e.target.files?.[0] || null;
    setVideoFile(selectedVideoFile);

    if (selectedVideoFile) {
      setVideoPreview(URL.createObjectURL(selectedVideoFile));
    } else {
      setVideoPreview(null);
    }
  };

  return (
    <section id="blogs">
      <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-6 flex gap-4">
          <button
            className={`rounded-lg px-4 py-2 ${currentTab === 'blogs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentTab('blogs')}
          >
            Blogs
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${currentTab === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentTab('videos')}
          >
            Videos
          </button>
        </div>
        {currentTab === 'blogs' && (
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
              {blogId ? 'Edit Blog' : 'Add Blog'}
            </h2>
            <form
              onSubmit={blogId ? handleBlogEdit : handleBlogCreate}
              className="space-y-4"
            >
              {blogId !== null && (
                <input
                  type="number"
                  placeholder="Blog ID (for edit)"
                  value={blogId || ''}
                  onChange={(e) =>
                    setBlogId(
                      e.target.value ? parseInt(e.target.value, 10) : null
                    )
                  }
                  className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              <input
                type="text"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Blog Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full rounded-lg border p-2"
                />
                {preview && (
                  <Image
                    src={preview}
                    alt="Image Preview"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={reverse}
                  onChange={(e) => setReverse(e.target.checked)}
                  className="size-4"
                />
                Reverse
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 py-3 text-white transition-all hover:bg-blue-600"
              >
                {blogId ? 'Update Blog' : 'Add Blog'}
              </button>
            </form>
          </section>
        )}

        {currentTab === 'videos' && (
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
              Hydroponic world library
            </h2>
            <form onSubmit={handleVideoCreate} className="space-y-4">
              <input
                type="text"
                placeholder="Video Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Video Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Video URL (e.g., YouTube link)"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  onChange={handleVideoFileChange}
                  accept="image/*"
                  className="w-full rounded-lg border p-2"
                />
                {videoPreview && videoFile && (
                  <Image
                    src={videoPreview}
                    alt="Thumbnail Preview"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={reverse}
                  onChange={(e) => setReverse(e.target.checked)}
                  className="size-4"
                />
                Reverse
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 py-3 text-white transition-all hover:bg-blue-600"
              >
                Add Video
              </button>
            </form>
          </section>
        )}

        {/* Render the correct content based on the selected tab */}
        {currentTab === 'blogs' && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">Blogs</h2>
            <div className="grid gap-4">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex flex-col gap-3 rounded-lg bg-gray-100 p-4 shadow"
                  >
                    <h3 className="text-xl font-bold">{blog.title}</h3>
                    <p>{blog.content}</p>
                    {blog.imageUrl && (
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    )}
                    <button
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition-all hover:bg-yellow-600"
                      onClick={() => {
                        setBlogId(blog.id);
                        setTitle(blog.title);
                        setContent(blog.content);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded-lg bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600"
                      onClick={() => handleBlogDelete(blog.id)}
                    >
                      Delete Blog
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No blogs available.</p>
              )}
            </div>
          </section>
        )}

        {currentTab === 'videos' && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">
              Videos
            </h2>
            <div className="grid gap-4">
              {videos.length > 0 ? (
                videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex flex-col gap-3 rounded-lg bg-gray-100 p-4 shadow"
                  >
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p>{video.description}</p>
                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    )}
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Watch Video
                    </a>
                    <button
                      className="mt-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      onClick={() => handleVideoDelete(video.id)}
                    >
                      Delete Video
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No videos available.</p>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default BlogForm;
