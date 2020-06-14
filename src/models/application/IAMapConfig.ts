/**
 * 高德地图配置
 */
export default interface IAMapConfig
{
    // 自定义样式
    mapStyle: string;
    // 自定义地图中心
    center: Array<number>;
    // 自定义地图缩放等级
    zoom: Array<number>;
}
