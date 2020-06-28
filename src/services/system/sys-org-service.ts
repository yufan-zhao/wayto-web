import { Injectable } from "uxmid-core";
import ServiceBase from "../service-base";
import IHttpResponse from "src/common/http/http-response";
import IHttpRequest from "src/common/http/http-request";

import { OrgTree } from "src/models";

/**
 * 组织服务
 */
@Injectable()
export default class SysOrgService extends ServiceBase
{
    /**
     * 查询
     * @param req 
     */
    public async query(req: IHttpRequest): Promise<OrgTree>
    {
        const response: IHttpResponse = await this.apis.orgQuery(req);
        const orgTree: OrgTree = new OrgTree(response);
        return orgTree;
    }

    /**
     * 插入
     * @param req 
     */
    public async insert(req: IHttpRequest): Promise<IHttpResponse>
    {
        return this.apis.orgInsert(req);
    }

    /**
     * 更新
     * @param req 
     */
    public async update(req: IHttpRequest): Promise<IHttpResponse>
    {
        return this.apis.orgUpdate(req);
    }

    /**
     * 删除
     * @param req
     */
    public async delete(req: IHttpRequest): Promise<IHttpResponse>
    {
        return this.apis.orgDelete(req);
    }
}
