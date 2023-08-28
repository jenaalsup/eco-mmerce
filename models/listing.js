import { Schema, model, models } from 'mongoose';

const ListingSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  listing: {
    type: String,
    required: [true, 'Product listing is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Listing = models.Listing || model('Listing', ListingSchema);

export default Listing;