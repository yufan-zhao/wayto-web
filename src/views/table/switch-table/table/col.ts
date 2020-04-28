import dayjs from "dayjs";

const renderTree = () =>
{
    return [
        {
            render: (h, params) =>
            {
                let defaultHead = require("src/assets/default-user.jpg");
                // let nameDiv = tooltipElement(params.row.name, 13, h, "320px", "h3");
                return h("div",
                {
                    class: "manage-table-info"
                },
                [
                    h("div",
                    {
                        class: "person"
                    },
                    [
                        h("img",
                        {
                            class: "avatar",
                            attrs:
                            {
                                src: ""
                            }
                        }),
                        h("span",
                        {
                            class: "info"
                        },
                        [
                            h("p", params.row.wxNO),
                            h("p", [
                                h("span", "手机号：" + params.row.mobile),
                                h("span", "最近登录：" + dayjs().diff(dayjs(params.row.lastLoginTime), "day") + "天前")
                            ])
                        ])
                        
                    ])
                ]);
            }
        }
    ];
};

export default renderTree;
