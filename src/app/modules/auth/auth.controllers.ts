import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';

// Create Bi Cycle Controllers
const loginUser = catchAsync(async (req, res) => {
  const { token } = await AuthServices.userLogin(req.body);
  res.cookie('accessToken', token, {
    secure: config.node_env === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Login Successful',
    data: token,
  });
});

// Logout User
const logoutUser = catchAsync(async (req, res) => {
  res.clearCookie('accessToken');
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Logout Successful',
    data: '',
  });
});





export const AuthControllers = {
  loginUser,
  logoutUser
};
