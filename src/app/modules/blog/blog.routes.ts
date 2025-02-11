import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { BlogValidationSchemas } from './blog.validation.schemas';
import { BlogControllers } from './blog.controllers';
// Init Router
const router = express.Router();
// Create Blog
router.post(
  '/', 
  requestValidation(BlogValidationSchemas.createBlogsValidationSchema),
  BlogControllers.createBlog,
);
//Get All Blog
router.get('/', BlogControllers.allBlog);
// Get Single Blog
router.get('/:productId', BlogControllers.singleBlog);
router.patch(
  '/:productId', 
  requestValidation(BlogValidationSchemas.updateBlogsValidationSchema),
  BlogControllers.updateSingleBlog,
);
// Delete Single Blog
router.delete('/:productId' , BlogControllers.deleteSingleBlog);

// Export Bi-Cycle Router
export const BlogRoutes = router;
