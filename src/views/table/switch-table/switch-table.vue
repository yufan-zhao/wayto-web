<template>
    <u-page-content class="switch-table">
        <!-- 主要搜索 BEGIN -->
        <i-form slot="search-left" ref="searchBox" @submit.native.prevent>
            <i-form-item label="所属单位：">
                <i-input placeholder="微信号/手机号码" @on-clear="onSearch" @keyup.native.enter="onSearch" v-model="filters.orgId" clearable></i-input>
                <!-- <u-org-cascader class="org-input" :orgs="state.orgs" v-model="orgsValue" @onChange="onOrgChange" :transfer="true"></u-org-cascader> -->
            </i-form-item>
            <i-form-item label="业主信息：">
                <i-input placeholder="手机号码" @on-clear="onSearch" @keyup.native.enter="onSearch" v-model="filters.keyword" clearable></i-input>
            </i-form-item>
            <i-form-item label="工程信息：">
                <i-input placeholder="工程名称" @on-clear="onSearch" @keyup.native.enter="onSearch" v-model="filters.projectKeyword" clearable></i-input>
            </i-form-item>
            <!-- <i-form-item label="下拉框：">
                <i-select placeholder="请选择" @on-change="onSearch" transfer clearable>
                    <i-option value="1">下拉测试1</i-option>
                    <i-option value="2">下拉测试2</i-option>
                    <i-option value="3">下拉测试3</i-option>
                </i-select>
            </i-form-item>
            <i-form-item label="起止时间：" class="input-item item-spick">
                <i-date-picker type="daterange" @on-change="onSearch" placement="bottom-end" placeholder="请选择" transfer></i-date-picker>
            </i-form-item> -->
            <i-form-item >
                <i-button type="primary" @click="onSearch">查询</i-button>
                <i-button type="info" @click="onReset">重置</i-button>
                <!-- <i-button type="info" @click="isOpenOperation = !isOpenOperation">{{isOpenOperation ? "收起" : "高级搜索"}}</i-button> -->
            </i-form-item>
        </i-form>
        <!-- 主要搜索 END -->

        <!-- 操作部分END -->
        <!-- <template slot="operation-btn">
            <i-button type="info" @click="onManage()">测试</i-button>
            <i-button type="primary" @click="onManage()">测试</i-button>
        </template> -->
        <!-- 操作部分END -->

        <!-- 高级搜索列 BEGIN-->
        <!-- <template slot="senior">
            <i-form>
                <i-form-item label="Radio选择：" class="input-item">
                    <i-radio-group @on-change="onSearch">
                        <i-radio label="">全部</i-radio>
                        <i-radio label="1">测试1</i-radio>
                        <i-radio label="2">测试2</i-radio>
                        <i-radio label="3">测试3</i-radio>
                    </i-radio-group>
                </i-form-item>
            </i-form>
        </template> -->
        <!-- 高级搜索列 END-->

        <!-- 表格 BEGIN -->
        <template slot="page-table">
            <u-switch-table ref="switchTable" 
                            :row-columuns="rowColumuns" 
                            :col-columuns="colColumuns" 
                            :load-func="loadRecords"  
                            @on-row-click="onRowClick">
                <template slot="detail">
                    <u-detail :currentItem="currentItem" :keyword="this.currentItem.mobile" @operations="onOperations"></u-detail>
                </template>
            </u-switch-table>
        </template>
        <!-- 表格 END -->
    </u-page-content>
</template>

<script lang="ts">
import { component, View, mixins, config, watch } from "uxmid-web";
import CommonView from "src/views/common-view";
import rowRender from "./table/row";
import colRender from "./table/col";

import ManageDetail from "./detail.vue";

@component({
    components:
    {
        "u-detail": ManageDetail
    }
})
export default class SwitchTable extends CommonView
{
    /**
     * tab
     * @member
     * @protected
     * @return {string}
     */
    private tabName: string = "info";

    /**
     * 查询筛选条件
     */
    private filters =
    {
        projectKeyword: undefined,
        keyword: undefined,
        orgId: undefined
    };

    /**
     * cascader组织菜单绑定值
     */
    private orgsValue = [];

    /**
     * 详情信息
     * @member
     * @protected
     * @returns {any}
     */
    protected currentItem: any = {};

    /**
     * 表格列表模式行渲染
     * @member
     * @protected
     * @returns {Array<any>}
     */
    protected get rowColumuns(): Array<any>
    {
        // 列表模式行渲染
        return rowRender(this.onOperations);
    }

    /**
     * 表格详情模式行渲染
     * @member
     * @protected
     * @returns {Array<any>}
     */
    protected get colColumuns(): Array<any>
    {
        // 详情模式行渲染
        return colRender();
    }

    /**
     * 触发列表操作
     * @param opsName - 列表操作名
     * @param item - 当前列
     * @member
     * @protected
     * @returns {void}
     */
    protected async onOperations(opsName: string, item: any): Promise<any>
    {
        console.log("ops");
    }

    /**
     * 触发列表选中操作
     * @member
     * @protected
     * @returns {void}
     */
    protected onRowClick(row: any): void
    {
        this.currentItem = row;
    }

    /**
     * 单位选择变化事件
     * @protected
     */
    protected onOrgChange(org: any): void
    {
        this.filters.orgId = org ? org.value : null;
        this.onSearch();
    }

    /**
     * 触发查询列表
     * @member
     * @protected
     * @returns {void}
     */
    protected onSearch(): void
    {
        this.$switchTable.filters = this.filters;
        this.$switchTable.onSearch();
    }

    /**
     * 触发重置查询方法
     * @member
     * @protected
     * @returns {void}
     */
    protected onReset(): void
    {
        for (const field of Object.keys(this.filters))
        {
            this.filters[field] = undefined;
        }
        this.orgsValue = [];
        this.onSearch();
    }

    /**
     * 触发管理操作
     * @member
     * @protected
     * @returns {void}
     */
    protected onManage(): void
    {
        // TODO 操作按钮组
        console.log("触发onManage方法");
    }

    /**
     * 异步加载列表数据源
     * @member
     * @protected
     * @returns {Promise<any>}
     */
    protected async loadRecords(model: any): Promise<any>
    {
        // const response = await this.personService.personOwners(model);
        const response =
        {
            content:
            {
                records: []
            },
            extras:
            {
                current: 1,
                size: 0
            }
        };
        if(model.data.current === 1 && response.content.records && response.content.records.length > 0)
        {
            response.content.records[0]._highlight = true;
            this.currentItem = response.content.records[0];
        }
        if (response.content.records.length > 0)
        {
            for (let i = 0; i < response.content.records.length; i++)
            {
                let item = response.content.records[i];
                item._serialNumber = i + 1 + (response.extras.current - 1) * response.extras.size;
            }
        }
        // 条件筛选为空的时候 要清除详情的数据
        else if(response.content.records && response.content.records.length === 0)
        {
            // 给个数据库木有的随机数
            this.currentItem = {};
        }
        return response;
    }

    /**
     * 获取switchTable
     * @private
     * @member
     * @returns {any}
     */
    private get $switchTable(): any
    {
        return this.$refs["switchTable"] as any;
    }
}
</script>

<style lang="less" scoped>

</style>