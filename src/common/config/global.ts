/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved. 
 */
import { IGlobalConfig } from "src/models/application";

const debug = process.env.NODE_ENV === "development";
const { apiServer, aMapKey } = (<any>window).waytoSetting;

const globalConfig: IGlobalConfig =
{
    // 服务器地址
    apiServer,

    // 地图apikey
    aMapKey,

    // 通讯密钥
    secret: "",

    // ajax相关配置
    ajaxDebug: debug,
    ajaxResponseType: "json",
    ajaxTimeout: 20000,
    ajaxCustomHeader: {},

    // amap相关配置
    aMapConfig:
    {
        mapStyle: "amap://styles/0586d45299ee460a500a3d02fb880e8d",
        center: [117.207888,39.097087],
        zoom: [2, 20]
    }
};

export default globalConfig;
