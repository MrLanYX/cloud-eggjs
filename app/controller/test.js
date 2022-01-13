'use strict';

const Controller = require('egg').Controller;
/**
 * @Controller user
 */
class TestController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'index';
    }
    /**
     * @summary 获取文章列表
     * @description 分页获取文章列表
     * @router get /find
     * @request query integer curPage 页码 默认 1
     * @request query integer pageSize 单页数量 默认 20
     * @response 200 JsonBody
     */
    async create() {
        const { ctx } = this;
        ctx.body = 'create';
    }
}

module.exports = TestController;