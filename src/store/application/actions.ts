import { ActionTree, ActionContext } from "vuex";
import State from "./state";
import { Route } from "vue-router";

export function setTabs(store: ActionContext<State, any>, tabs: Array<Route>)
{
    store.commit("SET_DYNAMIC_TABS", tabs);
}

export default <ActionTree<State, any>>
{
    setTabs
};
