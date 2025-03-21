import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

import { deleteFromS3, uploadToS3 } from '@/lib/s3';

const prisma = new PrismaClient();

// Fetch all videos (GET)
export async function GET() {
  try {
    const videos = await prisma.video.findMany();

    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new video (POST)
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const description = formData.get('content') as string;
    const reverse = formData.get('reverse') === 'true';
    const thumbnail = formData.get('thumbnail') as File;
    const video = formData.get('videoUrl') as string;

    if (!title || !description || !thumbnail || !video) {
      return NextResponse.json(
        { error: title, description, thumbnail, video },
        { status: 400 }
      );
    }

    // Upload thumbnail and video to S3
    const thumbnailUrl = await uploadToS3(thumbnail, 'thumbnails');

    // Save video metadata to the database
    const newVideo = await prisma.video.create({
      data: {
        title,
        description,
        reverse,
        thumbnail: thumbnailUrl,
        videoUrl: video,
      },
    });
    console.log(newVideo);
    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error('Error creating video:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Update an existing video (PATCH)
export async function PATCH(req: Request) {
  try {
    const formData = await req.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const reverse = formData.get('reverse') === 'true';
    const thumbnail = formData.get('thumbnail') as File | null;
    const video = formData.get('video') as string | null;

    if (!id) {
      return NextResponse.json(
        { error: 'Video ID is required' },
        { status: 400 }
      );
    }

    let thumbnailUrl: string | undefined = undefined;
    let videoUrl: string | undefined = undefined;

    // Handle the file uploads if provided
    if (thumbnail) {
      thumbnailUrl = await uploadToS3(thumbnail, 'thumbnails');
    }
    if (video) {
      videoUrl = video;
    }

    // Update the video in the database
    const updatedVideo = await prisma.video.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        reverse,
        thumbnail: thumbnailUrl ?? undefined,
        videoUrl: videoUrl ?? undefined,
      },
    });

    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (error) {
    console.error('Error updating video:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Delete a video (DELETE)
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Video ID is required' },
        { status: 400 }
      );
    }

    // Fetch the video to get URLs for deletion
    const video = await prisma.video.findUnique({
      where: { id: Number(id) },
    });

    if (!video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    // Delete the video and thumbnail from S3
    await deleteFromS3(video.thumbnail);
    await deleteFromS3(video.videoUrl);

    // Delete the video from the database
    await prisma.video.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: 'Video deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting video:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
