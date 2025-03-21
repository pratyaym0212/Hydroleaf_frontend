import { randomUUID } from 'crypto';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

// Initialize the S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

// Upload file to S3 and return the URL
export const uploadToS3 = async (
  file: File,
  folder: string
): Promise<string> => {
  try {
    const fileName = `${folder}/${randomUUID()}-${file.name}`;

    // Convert the file to a buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    console.log(fileBuffer);
    // Upload the file to S3
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
        Body: fileBuffer,
        ContentType: file.type,
      })
    );

    // Generate the public URL for the uploaded file
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    // Return the URL
    return fileUrl;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error('Failed to upload file to S3');
  }
};

// Delete file from S3
export const deleteFromS3 = async (fileUrl: string): Promise<void> => {
  const fileName = fileUrl.split('/').pop(); // Extract file name from URL

  if (fileName) {
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
      })
    );
  }
};
