import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith('video');
    const ext = path.extname(file.originalname).substring(1);
    
    return {
      folder: 'rrjewel',
      resource_type: isVideo ? 'video' : 'image',
      format: isVideo ? (ext || 'mp4') : (ext || 'jpg'),
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`
    };
  },
});

export { cloudinary, storage };
