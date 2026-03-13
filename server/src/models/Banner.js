import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
  text: String,
  type: { type: String, enum: ['info','hot','new','sold-out'], default: 'info' },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// Transform _id to id when converting to JSON
BannerSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  }
});

const Banner = mongoose.model('Banner', BannerSchema);
export default Banner;
