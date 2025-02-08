import { z } from 'zod'; 
import { BikeCategory } from './blog.constant';

const createBlogsValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please Provide a Blog Title' }),
    content: z.string({ required_error: 'Please Provide content' }),
    category: z.enum([...BikeCategory] as [string, ...string[]]),
    image: z.string().optional(),
  }),
});

const updateBlogsValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Please Provide a title' })
      .optional(),
      content: z
      .string({ required_error: 'Please Provide content' })
      .optional(),
    image: z.string().optional(),
  }),
});

export const BlogValidationSchemas = {
  createBlogsValidationSchema,
  updateBlogsValidationSchema,
};
