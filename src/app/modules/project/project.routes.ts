import express from 'express';
import requestValidation from '../../middlewares/requestValidation'; 
import { ProjectControllers } from './project.controllers';
import { ProjectValidationSchemas } from './project.validation.schemas';
// Init Router
const router = express.Router();
// Create Project
router.post(
  '/project', 
  requestValidation(ProjectValidationSchemas.createProjectsValidationSchema),
  ProjectControllers.createProject,
);
//Get All Project
router.get('/project', ProjectControllers.allProject);
// Get Single Project
router.get('/project/:productId', ProjectControllers.singleProject);

router.patch(
  '/project/:productId', 
  requestValidation(ProjectValidationSchemas.updateProjectsValidationSchema),
  ProjectControllers.updateSingleProject,
);
// Delete Single Project
router.delete('/project/:productId',  ProjectControllers.deleteSingleProject);

// Export Bi-Cycle Router
export const ProjectRoutes = router;
