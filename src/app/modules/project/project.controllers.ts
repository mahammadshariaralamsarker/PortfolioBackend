 
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse'; 
import { ProjectsServices } from './project.services';

// Create Bi Cycle Controllers
const createProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.ProjectsDataSaveToDatabase(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project Created Successful',
    data: result,
  });
});

// Get All Bi Cycle Controller
const allProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.getAllProjectsDataFromDatabase(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});


// Get Single Bi Cycle
const singleProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.getSingleProjectsDataFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

// Update Single Bi Cycle
const updateSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.singleProjectsDataUpdateFromDatabase(
    req.params.productId,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

// Delete Single Bi Cycle Controller

const deleteSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.singleProjectsDataDeleteFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

// Export Controllers
export const ProjectControllers = {
  createProject,
  allProject,
  singleProject,
  updateSingleProject,
  deleteSingleProject,
};
