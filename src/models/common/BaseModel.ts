/**
 * 数据模型基础类
 * 
 */
export default abstract class BaseModel
{
    /**
     * 存储原始接口数据
     * @public
     */
    public _data: any;

    /**
     * 构造函数
     * 创建一个对象，有接口数据则填充对象
     * @param {option: 接口返回数据}
     */
    public constructor(options?: any)
    {
        if (options)
        {
            this._data = options;
            this.toFrontData(options);
        }
    }

    /**
     * 转换数据为接口请求数据格式
     * @public
     * @returns {接口数据}
     */
    public abstract toHttpRequestData(): any;

    /**
     * 转换接口返回数据为业务数据并填充对象
     * @public
     * @param {content: 接口返回数据}
     * @returns {void}
     */
    public abstract toFrontData(content: any): void;
}
