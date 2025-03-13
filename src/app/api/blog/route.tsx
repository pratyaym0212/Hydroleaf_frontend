import { randomUUID } from 'crypto';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

// Fetch all blogs (GET)
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new blog (POST)
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const reverse = formData.get('reverse') === 'true';
    const file = formData.get('file') as File;

    if (!title || !content || !file) {
      return NextResponse.json(
        { error: 'Title, content, and image are required' },
        { status: 400 }
      );
    }

    // Generate a unique file name
    const fileName = `${randomUUID()}-${file.name}`;

    // Convert file to Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Upload to S3
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
        Body: fileBuffer,
        ContentType: file.type,
      })
    );

    const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    // Save blog to database
    const newBlog = await prisma.blog.create({
      data: { title, content, image: imageUrl, reverse },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Update a blog by ID (PATCH)
export async function PATCH(req: Request) {
  try {
    const formData = await req.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const reverse = formData.get('reverse') === 'true';
    const file = formData.get('file') as File | null;

    if (!id) {
      return NextResponse.json(
        { error: 'Blog ID is required' },
        { status: 400 }
      );
    }

    let imageUrl;

    if (file) {
      const fileName = `${randomUUID()}-${file.name}`;
      const fileBuffer = Buffer.from(await file.arrayBuffer());

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME!,
          Key: fileName,
          Body: fileBuffer,
          ContentType: file.type,
        })
      );

      imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        image: imageUrl ?? undefined,
        reverse,
      },
    });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Delete a blog by ID (DELETE)
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Blog ID is required' },
        { status: 400 }
      );
    }

    // Fetch blog to get image URL
    const blog = await prisma.blog.findUnique({
      where: { id: Number(id) },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Extract file name from S3 URL
    const imageUrl = blog.image;
    const fileName = imageUrl.split('/').pop(); // Get the filename from URL

    // Delete from S3 if exists
    if (fileName) {
      await s3.send(
        new DeleteObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME!,
          Key: fileName,
        })
      );
    }

    // Delete from database
    await prisma.blog.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: 'Blog deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
