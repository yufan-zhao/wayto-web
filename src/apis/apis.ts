/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved. 
 */

import API from "./urls";
import HttpClient from "common/http/http-client";
import IHttpResponse from "../common/http/http-response";
import IHttpRequest from "common/http/http-request";
import { ArgumentException } from "uxmid-core";

/**
 * 发送ajax请求
 * @param {any} options 请求参数
 * @param {string} url 请求地址
 * @param {string} method 请求类型
 * @returns {any}
 */
const send = async (url: string, options?: IHttpRequest, method: string = "post"): Promise<IHttpResponse> =>
{
    // 如果未传入url以及参数抛出异常
    if (!url)
    {
        throw new ArgumentException("url is null.");
    }

    // 返回promise实例由用户处理
    return HttpClient.instance[method](
    {
        url,
        ...options
    });
};

/**
 * 接口类
 * @class
 * @version 1.0.0
 */
export default class Apis
{
    // 公共
    public login =                   (options?: IHttpRequest) => send(API.login, options);                                   // 登录接口
    public getVerifyImg =            (options?: IHttpRequest) => send(API.getVerifyImg, options, "get");                     // 登录页请求图形验证码
    public findPwdMsgCode =          (options?: IHttpRequest) => send(API.findPwdMsgCode, options, "get");                   // 找回密码短信验证码
    public findPassword =            (options?: IHttpRequest) => send(API.findPassword, options);                            // 找回密码
    public uploadFile =              (options?: IHttpRequest) => send(API.uploadFile, options, "upload");                    // 上传文件

    // 巡查管理
    public findPatrol =              (options?: IHttpRequest) => send(API.findPatrol, options);                              // 分页查询巡查列表

    // 系统管理
    public findOrgTree =             (options?: IHttpRequest) => send(API.findOrgTree, options, "put");                      // 单位树形结构查询，支持按名称模糊匹配

    // 组织管理
    public orgQuery =              (options?: IHttpRequest) => send(API.orgQuery, options, "get");                              // 分页查询巡查列表
    public orgInsert =              (options?: IHttpRequest) => send(API.orgInsert, options, "post");                           // 分页查询巡查列表
    public orgUpdate =              (options?: IHttpRequest) => send(API.orgUpdate, options, "put");                            // 分页查询巡查列表
    public orgDelete =              (options?: IHttpRequest) => send(API.orgDelete, options, "delete");                         // 分页查询巡查列表

    // 角色管理
    public roleQuery =              (options?: IHttpRequest) => send(API.roleQuery, options, "get");                              // 分页查询巡查列表
    public roleInsert =              (options?: IHttpRequest) => send(API.roleInsert, options, "post");                           // 分页查询巡查列表
    public roleUpdate =              (options?: IHttpRequest) => send(API.roleUpdate, options, "put");                            // 分页查询巡查列表
    public roleDelete =              (options?: IHttpRequest) => send(API.roleDelete, options, "delete");                         // 分页查询巡查列表
}
