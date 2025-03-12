'use client';

import { useState } from 'react';
// import { signIn, signOut, useSession } from "next-auth/react";

const BlogForm = () => {
  // const { data: session } = useSession(); // Get authentication session

  // if (!session) {
  //   return (
  //     <div className="flex flex-col items-center p-4">
  //       <h2 className="text-lg font-bold">Restricted Access</h2>
  //       <p>You need to log in to add or edit blogs.</p>
  //       <button onClick={() => signIn("credentials", { callbackUrl: "/" })}>Sign In</button>       </div>
  //   );
  // }
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [reverse, setReverse] = useState(false);
  const [blogId, setBlogId] = useState<number | null>(null); // ID for editing
  const [deleteId, setDeleteId] = useState('');

  // Handle Create Blog
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
      setReverse(false);
    } else {
      alert('Failed to add blog.');
    }
  };

  // Handle Edit Blog
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
    if (file) formData.append('file', file); // Optional image update
    formData.append('reverse', String(reverse));

    const response = await fetch('/api/blog', {
      method: 'PATCH', // Update
      body: formData,
    });

    if (response.ok) {
      alert('Blog updated!');
      setTitle('');
      setContent('');
      setFile(null);
      setReverse(false);
      setBlogId(null);
    } else {
      alert('Failed to update blog.');
    }
  };

  // Handle Delete Blog
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!deleteId) {
      alert('Please enter a Blog ID to delete.');
      return;
    }

    const response = await fetch('/api/blog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(deleteId, 10) }),
    });

    if (response.ok) {
      alert('Blog deleted!');
      setDeleteId('');
    } else {
      alert('Failed to delete blog.');
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded border p-4">
      {/* <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Add Blog</h2>
      <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
        Log out
      </button>
    </div>   */}
      {/* Create or Edit Blog */}
      <form
        onSubmit={blogId ? handleEdit : handleCreate}
        className="flex flex-col gap-4"
      >
        <h2 className="text-lg font-bold">
          {blogId ? 'Edit Blog' : 'Add Blog'}
        </h2>
        <input
          type="number"
          placeholder="Blog ID (for edit)"
          value={blogId || ''}
          onChange={(e) =>
            setBlogId(e.target.value ? parseInt(e.target.value, 10) : null)
          }
          className="rounded border p-2"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded border p-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="rounded border p-2"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="rounded border p-2"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={reverse}
            onChange={(e) => setReverse(e.target.checked)}
          />
          Reverse
        </label>
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          {blogId ? 'Update Blog' : 'Add Blog'}
        </button>
      </form>

      {/* Delete Blog */}
      <form onSubmit={handleDelete} className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Delete Blog</h2>
        <input
          type="number"
          placeholder="Enter Blog ID to delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          className="rounded border p-2"
        />
        <button type="submit" className="rounded bg-red-500 p-2 text-white">
          Delete Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
