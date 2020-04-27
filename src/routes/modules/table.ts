const switchTable = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/table/switch-table/switch-table")), "table");
const simpleTable = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/table/simple-table/simple-table")), "table");

export default
[
    {
        name: "switch-table",
        path: "switch-table",
        component: switchTable,
        meta:
        {
            title: "switchTable",
            label: "变形表格"
        }
    },
    {
        name: "simple-table",
        path: "simple-table",
        component: simpleTable,
        meta:
        {
            title: "simpleTable",
            label: "简单表格"
        }
    }
];
