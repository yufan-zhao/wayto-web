import IAMapConfig from "./IAMapConfig";

export default interface IGlobalConfig
{
    // api地址
    apiServer: string;
    // 高德地图key
    aMapKey: string;
    // 通讯密钥
    secret: string;
    // ajax debug模式
    ajaxDebug: boolean;
    // ajax 返回类型
    ajaxResponseType: string;
    // ajax 超时时间
    ajaxTimeout: number;
    // ajax 自定义头部
    ajaxCustomHeader: any;
    // 高德地图配置
    aMapConfig: IAMapConfig;
}
