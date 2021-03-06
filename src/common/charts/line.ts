/*!
 * Authors:
 *      yyhugh
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved.
 */

import { deepCopy } from "common/utils";

/**
 * 获取折线图配置
 * @param {Array<any>} data 数据
 * @param {boolean} isMock 是否使用模拟数据
 * @param {Array<string>} color 配色
 */
export function getLineConfig(params): any
{
    const { data, isMock, color } = params;
    const line =
    {
        color: ["#4a7ffe", "#04d1c6"],
        tooltip:
        {
            trigger: "axis",
            // 坐标轴指示器，坐标轴触发有效
            axisPointer:
            {
                // 默认为直线，可选为："line" | "shadow"
                type : "shadow",
                shadowStyle: { opacity: 0.3 },
                label: { seriesName: "item" }
            },
            backgroundColor: "#fff",
            textStyle: { color: "#5D6673" }
        },
        legend:
        {
            right: 30,
            top: 20
        },
        grid:
        {
            left: 20,
            right: 30,
            top: 70,
            bottom: 20,
            containLabel: true
        },
        xAxis:
        {
            type : "category",
            data : ["20191213", "20191214", "20191215", "20191216", "20191217", "20191218", "20191219"],
            axisLine: { lineStyle: { color: "#F2F4F6" } },
            axisLabel: { color: "#5D6673",padding: [10,0,0,0]},
            axisTick: { show: false, alignWithLabel: true }
        }
        ,
        yAxis:
        {
            type : "value",
            axisLabel:
            {
                color: "#A6ABB5",
                padding: [0, 10, 0, 0]
            },
            nameTextStyle: { fontSize: 18 },
            axisLine: { show: false },
            splitLine:
            {
                lineStyle: { color: "#F2F4F6" },
                show: true
            },
            axisTick: { show: false }
        }
        ,
        series:
        [
            {
                name: "危险",
                type: "line",
                stack: "数量",
                data: [33, 24, 15, 26, 27, 28, 29, 32, 13]
            },
            {
                name: "检查",
                type: "line",
                stack: "数量",
                data: [3, 44, 55, 21, 32, 13, 31, 22, 43]
            }
        ]
    };

    const config = deepCopy<any>(line);

    if (color)
    {
        config.color = color;
    }

    if (!isMock)
    {
        // 格式化
        config.series = [];
        config.xAxis.data = [];
        config.legend.data = [];

        data.forEach(({ name, list }, i) =>
        {
            const seriesItem =
            {
                name,
                type: "line",
                stack: "数量",
                data: []
            };
            list.forEach(({ label, value }) =>
            {
                if (i === 0)
                {
                    config.xAxis.data.push(label);
                }
                seriesItem.data.push(value);
            });

            config.legend.data.push(name);
            config.series.push(seriesItem);
        });
    }

    return config;
}
