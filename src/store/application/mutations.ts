import { MutationTree } from "vuex";
import { ApplicationContext } from "src/application";
import State from "./state";
import { Route } from "vue-router";

export function SET_DYNAMIC_TABS(state: State, tabs: Array<Route>)
{
    state.dynamicTabs = tabs;
}

export default <MutationTree<State>>
{
    SET_DYNAMIC_TABS
};
