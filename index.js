import express from 'express';
import morgan from 'morgan'; // loging 
import helmet from 'helmet'; // 보안
import cookieParser from 'cookie-parser'; //유저정보
import bodyParser from 'body-parser'; // body 정보 Json
import userRouter from './router/userRouter';
import videoRouter from './router/videoRouter';
import globalRouter from './router/globalRouter';
import routes from './routers';
import {localMiddleware} from './middlewares';

const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));
app.use(cookieParser());
app.use(morgan("dev")); // logging기능 
app.use(localMiddleware);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);





export default app;



