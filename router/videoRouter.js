import exprss from 'express';
import routes from '../routers';
import {
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controller/videoController";

const videoRouter = exprss.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videosDeatil, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);





export default videoRouter;