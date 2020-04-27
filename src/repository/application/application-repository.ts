import { Injectable } from "uxmid-core";
import BaseRepository from "../base-repository";

@Injectable()
export default class ApplicationRepository extends BaseRepository
{
    /**
     * 菜单标识
     * @readonly
     * @member
     */
    private static readonly menu = Symbol("application-menu");
    /**
     * 标签页列表
     * @readonly
     * @member
     */
    private static readonly tabs = Symbol("application-tabs");
    /**
     * 缓存对象。
     * @readonly
     * @member
     */
    private static readonly cache = new Map<Symbol, any>();

    /**
     * 获取app菜单
     * @member
     * @property
     */
    public get applicationMenu()
    {
        return ApplicationRepository.cache.get(ApplicationRepository.menu);
    }

    /**
     * 存储app菜单
     * @member
     * @property
     */
    public set applicationMenu(value)
    {
        ApplicationRepository.cache.set(ApplicationRepository.menu, value);
    }

    public get applicationTabs()
    {
        return ApplicationRepository.cache.get(ApplicationRepository.tabs);
    }

    public set applicationTabs(value)
    {
        ApplicationRepository.cache.set(ApplicationRepository.tabs, value);
    }
}
