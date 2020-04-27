/*!
 * Authors:
 *      yyhugh
 *      yufan
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved.
 */
import { RouteConfig } from "vue-router";

// 布局组件
const admin = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/admin")), "admin");

import system from "./modules/system";
import patrol from "./modules/patrol";
import table from "./modules/table";

function resolveRoutes(menus)
{
    let result: Array<RouteConfig> =
    [
        {
            path: "/",
            redirect: "/login"
        },
        {
            name: "login",
            path: "/login",
            component: (resolve: any) => (<any>require).ensure([], () => resolve(require("views/login")), "login")
        },
        {
            name: "home",
            path: "/home",
            redirect: "/system"
        },
        ...menus
        // ...error
    ];
    return result;
}

const menus: Array<RouteConfig> =
[
    {
        name: "system",
        path: "/system",
        redirect: "/system/system-main",
        component: admin,
        meta:
        {
            title: "系统管理",
            label: "系统管理",
            icon: "iconfont iconicon_xitongguanli"
        },
        children:
        [
            ...system
        ]
    },
    {
        name: "patrol",
        path: "/patrol",
        redirect: "/patrol/patrol-plan",
        component: admin,
        meta:
        {
            title: "巡查管理",
            label: "巡查管理",
            icon: "iconfont iconicon_xunchaguanli"
        },
        children:
        [
            ...patrol
        ]
    },
    {
        name: "table",
        path: "/table",
        redirect: "/table/switch-table",
        component: admin,
        meta:
        {
            title: "表格",
            label: "表格",
            icon: "iconfont iconicon_xitongguanli"
        },
        children:
        [
            ...table
        ]
    }
];

const routes: Array<RouteConfig> = resolveRoutes(menus);

export
{
    menus,
    routes
};
