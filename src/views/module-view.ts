import { View } from "uxmid-web";
import { Application } from "uxmid-core";
import { ApplicationContext } from "../application";

export default class ModuleView extends View
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
}
