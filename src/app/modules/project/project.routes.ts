import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import auth from '../../middlewares/authChecking'; 
import { ProjectControllers } from './project.controllers';
import { ProjectValidationSchemas } from './project.validation.schemas';
// Init Router
const router = express.Router();
// Create Project
router.post(
  '/',
  auth(),
  requestValidation(ProjectValidationSchemas.createProjectsValidationSchema),
  ProjectControllers.createProject,
);
//Get All Project
router.get('/', ProjectControllers.allProject);
// Get Single Project
router.get('/:productId', ProjectControllers.singleProject);

router.patch(
  '/:productId',
  auth(),
  requestValidation(ProjectValidationSchemas.updateProjectsValidationSchema),
  ProjectControllers.updateSingleProject,
);
// Delete Single Project
router.delete('/:productId', auth(), ProjectControllers.deleteSingleProject);

// Export Bi-Cycle Router
export const ProjectRoutes = router;
