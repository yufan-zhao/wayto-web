/*!
 * Authors:
 *      yyhugh
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved.
 */

const plan = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/patrol/plan/plan")), "patrol");

export default
[
    {
        name: "patrol-plan",
        path: "patrol-plan",
        component: plan,
        meta:
        {
            title: "巡查计划",
            label: "巡查计划"
        }
    }
];
