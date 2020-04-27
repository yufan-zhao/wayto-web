import { View } from "uxmid-web";
import { Application } from "uxmid-core";
import { ApplicationContext } from "../application";
import { Store } from "vuex";
import { repository } from "src/common/decorator";
import { ApplicationRepository } from "src/repository";

export default class CommonView extends View
{

    @repository("ApplicationRepository")
    protected applicationRepository: ApplicationRepository;

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
     * 获取当前应用的vuex
     * @protected
     * @property
     * @readonly Store<any>
     */
    protected get store(): Store<any>
    {
        return this.$store;
    }
}
