import { Router } from 'express'; 
import { AuthRouter } from '../modules/auth/auth.routes';  
import { ProjectRoutes } from '../modules/project/project.routes';
import { BlogRoutes } from '../modules/blog/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: ProjectRoutes,
  },                                                    
  {
    path: '/admin/blogs',
    route: BlogRoutes,
  },                                                    
  {
    path: '/auth',
    route: AuthRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
