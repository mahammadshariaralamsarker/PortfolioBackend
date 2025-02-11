import { model, Schema } from 'mongoose';
import {  TBlogs } from './blog.Interface';

// Create Blog Cycle Schema
const BlogSchema = new Schema<TBlogs>({
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
    required: true,
  },
  
});

// Export Model
export const Blogs = model<TBlogs>('Blogs', BlogSchema);
