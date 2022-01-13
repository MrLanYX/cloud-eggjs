'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { controller, jwt } = app;

    const apiRouter = app.router.namespace('/api');
    apiRouter.get('/v1/test', jwt, controller.test.index);
    apiRouter.resources('test', '/v2/test', jwt, controller.test);
};