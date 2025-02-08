import { Router } from 'express'; 
import { AuthRouter } from '../modules/auth/auth.routes'; 
import { BlogRoutes } from '../modules/bike/blog.routes';
import { ProjectRoutes } from '../modules/project/project.routes';

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
