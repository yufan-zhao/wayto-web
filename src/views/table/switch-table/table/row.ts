import dayjs from "dayjs";
import { EnumUtils } from "uxmid-core";

let num = 0;

const renderTree = (operations: any) =>
{

    return [
        {
            title: "",
            width: 10,
            renderHeader: (h, params) =>
            {
                return h("div", "");
            }
        },
        {
            title: "序号",
            minWidth: 50,
            render: (h, params) =>
            {
                return h("div", params.row._serialNumber);
            }
        },
        {
            title: "微信名称",
            minWidth: 150,
            render: (h, params) =>
            {
                return h("div",
                    {
                        class: "expand-height"
                    },
                    params.row.wxNO
                );
            }
        },
        {
            title: "手机号码",
            minWidth: 150,
            render: (h, params) =>
            {
                return h("span", params.row.mobile);
            }
        },
        {
            title: "备案数量",
            minWidth: 100,
            render: (h, params) =>
            {
                return h("span", params.row.count || "-");
            }
        },
        {
            title: "最近登录",
            minWidth: 200,
            render: (h, params) =>
            {
                return h("span", dayjs(params.row.lastLoginTime).format("YYYY-MM-DD HH:MM:SS") || "-");
            }
        },
        {
            title: "状态",
            minWidth: 150,
            render: (h, params) =>
            {
                // TODO 缺少一个小图标
                let label = "-";
                if (params.row.enable === 0) label = "禁用";
                if (params.row.enable === 1) label = "正常";
                return h("span", label);
            }
        },
        {
            title: "操作",
            width: 150,
            render: (h, params) =>
            {
                return h("span",
                {
                    class: "oprate-btn-all"
                },
                [
                    h("a",
                    {
                        attrs:
                        {
                            href: "prijavascript: void(0);"
                        },
                        on:
                        {
                            click: e =>
                            {
                                e.stopPropagation();
                                operations("detail", params.row);
                            }
                        }
                    },
                    "详情"),
                    h("a",
                    {
                        attrs:
                        {
                            href: "prijavascript: void(0);"
                        },
                        on:
                        {
                            click: e =>
                            {
                                e.stopPropagation();
                                operations("userControl", params.row);
                            }
                        }
                    },
                    params.row.enable === 1 ? "禁用" : "启用")
                ]);
            }
        }
    ];
};

export default renderTree;
