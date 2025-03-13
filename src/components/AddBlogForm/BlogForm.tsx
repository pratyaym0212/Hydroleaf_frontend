'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
};

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [reverse, setReverse] = useState(false);
  const [blogId, setBlogId] = useState<number | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]); // Typed properly

  // Fetch Blogs
  const fetchBlogs = async () => {
    const response = await fetch('/api/blog');
    if (response.ok) {
      const data: Blog[] = await response.json();
      setBlogs(data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image.');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    formData.append('reverse', String(reverse));

    const response = await fetch('/api/blog', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Blog added!');
      setTitle('');
      setContent('');
      setFile(null);
      setPreview(null);
      setReverse(false);
      fetchBlogs();
    } else {
      alert('Failed to add blog.');
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
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

  const handleDelete = async (id: number) => {
    const response = await fetch('/api/blog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      alert('Blog deleted!');
      fetchBlogs();
    } else {
      alert('Failed to delete blog.');
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-gray-700">
        {blogId ? 'Edit Blog' : 'Add Blog'}
      </h2>
      <form onSubmit={blogId ? handleEdit : handleCreate} className="space-y-4">
        {blogId !== null && (
          <input
            type="number"
            placeholder="Blog ID (for edit)"
            value={blogId || ''}
            onChange={(e) =>
              setBlogId(e.target.value ? parseInt(e.target.value, 10) : null)
            }
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Content"
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
              alt="Preview"
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

      {/* Blog List */}
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Blogs</h2>
        <div className="grid gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow"
              >
                <div>
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <p className="text-gray-600">{blog.content}</p>
                  {blog.imageUrl && (
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      width={64}
                      height={64}
                      className="mt-2 rounded-lg object-cover"
                    />
                  )}
                </div>
                <div className="flex gap-2">
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
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
