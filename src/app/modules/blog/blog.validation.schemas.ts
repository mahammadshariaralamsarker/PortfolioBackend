import { z } from 'zod';  

const createBlogsValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please Provide a Blog Title' }),
    content: z.string({ required_error: 'Please Provide content' }),
    category: z.string().optional(),
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
