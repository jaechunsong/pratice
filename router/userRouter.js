import exprss from 'express';
import routes from '../routers';
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";


const userRouter = exprss.Router();
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;