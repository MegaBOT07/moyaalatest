import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: String,
  url: { type: String, required: true },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  thumbnail: String
}, { timestamps: true });

// Transform _id to id when converting to JSON
VideoSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  }
});

const Video = mongoose.model('Video', VideoSchema);
export default Video;
