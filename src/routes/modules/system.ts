/*!
 * Authors:
 *      yyhugh
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved.
 */

const system = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/system/system")), "system");

export default
[
    {
        name: "system-main",
        path: "system-main",
        component: system,
        meta:
        {
            title: "系统管理",
            label: "系统管理"
        }
    }
];
