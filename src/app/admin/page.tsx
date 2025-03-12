import AddBlogForm from '@/components/AddBlogForm/BlogForm';

export default function AdminBlogPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Blog Post (Admin Only)</h1>
      <AddBlogForm />
    </div>
  );
}
