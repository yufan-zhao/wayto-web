import { Route } from "vue-router";

export default class State
{
    /**
     * 应用动态菜单列表
     * @property
     * @returns {Array<Route>}
     */
    public dynamicTabs: Array<Route> = [];
}
