<template>
    <l-main class="iview-reset">
        <l-generic>
            <u-page-list :active="currentRoute.name" :custom="true">
                <!--选项卡列表 BEGIN-->
                <template slot="head">
                    <i-tab-pane v-for="(item, i) in tabs" :key="i" :label="item.meta.label" :name="item.name"></i-tab-pane>
                </template>
                <!--选项卡列表 END-->

                <!-- 选项卡内容 BEGIN -->
                <router-view class="content-layout"></router-view>
                <!-- 选项卡内容 END -->
            </u-page-list>
        </l-generic>
    </l-main>
</template>
<script lang="ts">
import { component, View, watch } from "uxmid-web";
import CommonView from "./common-view";
import { Route } from "vue-router";

@component
export default class AdminTemplate extends CommonView
{

    /**
     * 动态菜单容器
     * @protected
     * @property
     * @returns {Array<Route>}
     */
    protected tabs: Array<Route> = [];

    /**
     * 全局当前路由
     * @protected
     * @property
     * @returns {Route}
     */
    protected get currentRoute(): Route
    {
        return this.applicationContext.currentRoute;
    }

    /**
     * 动态菜单存储监听
     * @watch
     * @protected
     */
    @watch("applicationContext.store.state.application.dynamicTabs", {immediate: true})
    protected tabsWatch(val: Array<Route>): void
    {
        this.tabs = val;
    }
}
</script>
<style lang="less" scoped>
.content-layout
{
    height: 100%;
    background-color: #fff;
}
</style>
