import BaseModel from "../common/BaseModel";
import IHttpResponse from "src/common/http/http-response";
import IHttpRequest from "src/common/http/http-request";

/**
 * 组织节点
 */
export class OrgNode
{
    // 组织id
    public id: number;
    // 组织父id
    public parentId: number;
    // 组织名称
    public name: string;
    // 组织启用禁用状态
    public enable: boolean;
    // 下级组织
    public children: Array<OrgNode>;
}

/**
 * 组织树
 */
export class OrgTree extends BaseModel
{
    // 顶层节点
    public topNode: OrgNode;
    
    /**
     * 构造函数
     * @param res 接口源数据
     */
    public constructor(res?: IHttpResponse)
    {
        super(res.content);
    }

    public toHttpRequestData()
    {
        throw new Error("Method not implemented.");
    }
    public toFrontData(content: any): void
    {
        console.log(content);
    }
}
