import { model, Schema } from 'mongoose'; 
import { TProjects } from './project.Interface';

// Create Bi Cycle Schema
const ProjectSchema = new Schema<TProjects>({
   
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

// Export Model
export const Projects = model<TProjects>('Projects', ProjectSchema);
