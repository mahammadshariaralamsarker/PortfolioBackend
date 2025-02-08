import { z } from 'zod'; 

const createProjectsValidationSchema = z.object({
  body: z.object({
    description: z.string({ required_error: 'Please Provide description' }),
    image: z.string().optional(),
  }),
});

const updateProjectsValidationSchema = z.object({
  body: z.object({
    description: z
      .string({ required_error: 'Please Provide description' })
      .optional(),
    image: z.string().optional(),
  }),
});

export const ProjectValidationSchemas = {
  createProjectsValidationSchema,
  updateProjectsValidationSchema,
};
