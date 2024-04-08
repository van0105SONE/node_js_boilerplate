const express = require('express');
const postRouter = require('./postRouter');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/post',
        route: postRouter
    }
]

defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route);
})




module.exports = router;