<template>
    <i-sider v-model="isCollapsed"  collapsible :collapsed-width="72" :width="192" :class="isCollapsed ? 'collapsed' : ''" >
        <div class="layout-sidebar-logo" @click="toHome">
            <!-- <img class="logo-img" src="~assets/logo-sidebar.png" alt="logo"> -->
            <h1 class="logo-text">DEMO</h1>
        </div>
        <i-menu
            class="layout-sidebar-menu"
            width="auto"
            ref="menu"
            :accordion="true"
            :open-names="open"
            :active-name="activeName"
            @on-select="onMenuSelect"
        >
            <i-menu-item v-for="(item, i) in menus" :key="i" :name="item.name">
                <i :class="item.icon"></i>
                <span>{{item.label}}</span>
            </i-menu-item>
        </i-menu>
        <!-- 触发器 BEGIN-->
        <div class="trigger"  slot="trigger" @click="isCollapsed = !isCollapsed">
            <i class="iconfont iconicon_xitongguanli"></i>
        </div>
        <!-- 触发器 END-->
    </i-sider>
</template>

<script lang="ts">
import { component, Component, watch } from "uxmid-web";
import { Application } from "uxmid-core";
import { ApplicationContext } from "src/application";
import { IMenu } from "models";

/**
 * 表示一个公共侧边栏组件。
 * @class
 * @version 1.0.0
 */
@component
export default class Sidebar extends Component
{
    /**
     * 获取当前应用的上下文实例。
     * @protected
     * @property
     * @returns ApplicationContext
     */
    protected get applicationContext(): ApplicationContext
    {
        return Application.context as ApplicationContext;
    }

    /**
     * 获取和设置展开当前菜单。
     * @protected
     * @property
     * @returns {boolean}
     */
    protected isCollapsed: boolean = false;

    /**
     * 获取当前需要高亮的菜单路径。
     * @protected
     * @property
     * @returns {string}
     */
    protected get activeName(): string
    {
        let path: string = this.$route.path,
            paths: Array<string> = path.replace(/^\/\//, "").split("/");

        return paths[1];
    }

    /**
     * 获取和设置当前导航的打开窗口。
     * @protected
     * @property
     * @returns {Array<string>}
     */
    protected open: Array<string> = [];

    /**
     * 模块列表
     * @protected
     * @property
     * @returns {Array<IMenu>}
     */
    protected menus: Array<IMenu> = [];

    /**
     * 当路由发生变化的时候操作。
     * @protected
     * @param {any} - to 当前路由实例。
     * @returns {void}
     */
    @watch("$route", {deep: true, immediate: true})
    protected updateOpen(to: any): void
    {
        let path: string = this.$route.path,
            paths: Array<string> = path.replace(/^\/waterleakage\//, "").split("/");

        this.open = [paths[0]];

        this.$nextTick(() => (this.$refs.menu as any).updateOpened());
    }

    /**
     * 当选择菜单项时调用。
     * @protected
     * @param  {string} path 菜单路径。
     * @returns {void}
     */
    protected onMenuSelect(name: string): void
    {
        this.resolveTabs(name);
        name !== this.$route.name && this.$router.push({ name });
    }

    /**
     * 返回首页。
     * @protected
     * @returns {void}
     */
    protected toHome(): void
    {
        this.$router.push("/home");
    }

    /**
     * created钩子
     */
    private created(): void
    {
        // 从上下文中取出菜单
        const menus = this.applicationContext.menus;
        this.menus = this.resolveMenu(menus);

        // 获取当前路由顶级菜单name
        this.resolveTabs(this.applicationContext.currentRoute.matched[0].name);
    }

    /**
     * 菜单处理方法
     * @private
     * @returns {Array<IMenu>}
     */
    private resolveMenu(menu): Array<IMenu>
    {
        let result: Array<IMenu> = [];
        menu.forEach(item =>
        {
            result.push({
                name: item.name,
                label: item.meta.label || "未命名",
                icon: item.meta.icon || "iconfont iconicon_xitongguanli"
            });
        });
        return result;
    }

    /**
     * 动态标签页处理方法
     * @private
     * @returns {void}
     */
    private resolveTabs(name: string): void
    {
        let dynamicTabs = [];
        let parentName = name;
        // 从上下文中取出菜单
        const menus = this.applicationContext.menus;
        menus.forEach(item =>
        {
            if (item.name === parentName)
            {
                dynamicTabs.push(...item.children);
            }
        });
        this.applicationContext.store.dispatch("application/setTabs", dynamicTabs);
    }
}
</script>

<style lang="less" scoped>
    @import "./sidebar";
</style>
