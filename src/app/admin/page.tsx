'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AddBlogForm from '@/components/AddBlogForm/BlogForm';
import { useAuth } from '@/context/AuthContext';

const BlogPage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div>
      <button onClick={logout} className="rounded bg-red-500 p-2 text-white">
        Logout
      </button>
      <AddBlogForm />
    </div>
  );
};

export default BlogPage;
