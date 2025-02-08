 
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse'; 
import { BlogsServices } from './blog.services';

// Create Bi Cycle Controllers
const createBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.BlogsDataSaveToDatabase(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog Created Successful',
    data: result,
  });
});

// Get All Bi Cycle Controller
const allBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.getAllBlogsDataFromDatabase(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});


// Get Single Bi Cycle
const singleBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.getSingleBlogsDataFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

// Update Single Bi Cycle
const updateSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.singleBlogsDataUpdateFromDatabase(
    req.params.productId,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

// Delete Single Bi Cycle Controller

const deleteSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.singleBlogsDataDeleteFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

// Export Controllers
export const BlogControllers = {
  createBlog,
  allBlog,
  singleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
