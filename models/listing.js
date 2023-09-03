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
  },
  imageBase64: {
    type: String,
    required: [false]
  },
  link: {
    type: String,
    required: [true, 'Link is required.'],
  },
  price: {
    type: String,
    required: [true, 'Price is required.'],
  },
});

const Listing = models.Listing || model('Listing', ListingSchema);

export default Listing;
