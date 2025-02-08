import { model, Schema } from 'mongoose';
import {  TBlogs } from './blog.Interface';

// Create Bi Cycle Schema
const BikeSchema = new Schema<TBlogs>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Tech ', 'Graphic ', 'Freelancing ', 'Web'],
    required: true,
  },
  
});

// Export Model
export const Blogs = model<TBlogs>('Blogs', BikeSchema);
