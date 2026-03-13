import mongoose from 'mongoose';

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercent: Number,
  active: { type: Boolean, default: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: null },
  expiresAt: Date,
  usageLimit: Number,
  used: { type: Number, default: 0 }
}, { timestamps: true });

// Transform _id to id when converting to JSON
CouponSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  }
});

const Coupon = mongoose.model('Coupon', CouponSchema);
export default Coupon;
