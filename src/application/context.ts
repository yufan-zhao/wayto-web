/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved. 
 */
import Router, { RouteConfig } from "vue-router";
import { Store } from "vuex";
import { IWorkbench, ApplicationContextBase, InvalidOperationException } from "uxmid-core";

import Workbench from "./workbench";

/**
 * 包含当前应用程序的上下文实例。
 * @class
 * @version 1.0.0
 */
export default class ApplicationContext extends ApplicationContextBase
{
    private _router: Router;
    private _store: Store<any>;
    private _menus: Array<RouteConfig>;

    /**
     * 获取或设置当前应用的主路由对象。
     * @property
     * @returns Router
     */
    public get router(): Router
    {
        return this._router;
    }
    
    public set router(value: Router)
    {
        if(!value)
        {
            throw new InvalidOperationException();
        }

        this._router = value;
    }

    public get menus(): Array<RouteConfig>
    {
        return this._menus;
    }

    public set menus(value: Array<RouteConfig>)
    {
        if(!value)
        {
            throw new InvalidOperationException();
        }
        
        this._menus = value;
    }
    
    /**
     * 获取或设置当前应用的状态管理对象。
     * @property
     * @returns Store<any>
     */
    public get store(): Store<any>
    {
        return this._store;
    }
    
    public set store(value: Store<any>)
    {
        if(!value)
        {
            throw new InvalidOperationException();
        }

        this._store = value;
    }

    /**
     * 获取当前应用程序的上下文实例。
     * @static
     * @member
     */
    public static readonly current: ApplicationContext = new ApplicationContext();
    
    /**
     * 私有构造函数。
     * @private
     */
    protected constructor()
    {
        super("wayto-web");
    }
    
    /**
     * 创建一个工作台对象。
     * @override
     * @returns IWorkbench
     */
    protected createWorkbench(args: Array<string>): IWorkbench
    {
        return new Workbench(this);
    }
}
