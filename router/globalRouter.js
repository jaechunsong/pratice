import exprss from 'express';
import routes from '../routers';
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";


const globalRouter = exprss.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.seach, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;