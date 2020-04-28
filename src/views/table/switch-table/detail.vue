<template>
    <div class="manage-detail">
        <section class="manage-detail-header">
            <h3>{{currentItem.wxNO}}</h3> 
            <section class="manage-detail-operation">
                <i-button type="info" v-if="detail.enable===0" @click="onOperations('userControl')">启用</i-button>
                <i-button type="info" v-if="detail.enable===1" @click="onOperations('userControl')">禁用</i-button>
            </section>
        </section>

        <i-tabs type="card" :animated="false" v-model="tabName">
            <i-tab-pane label="概况" name="info">
                <u-info :userId="currentItem && Number(currentItem.id)" :detail="currentItem"></u-info>
            </i-tab-pane>
        </i-tabs>
    </div>
</template>

<script lang="ts">
import { component, View, mixins, config, watch } from "uxmid-web";
import CommonView from "src/views/common-view";
import { service } from "src/common/decorator";

import info from "./subs/info.vue";

@component({
    components:
    {
        "u-info": info
    }
})
export default class ManageDetail extends CommonView
{

    /**
     * tab
     * @member
     * @protected
     * @return {string}
     */
    private tabName: string = "info";

    /**
     * 详情
     */
    protected detail: any = {};
    
    /**
     * 当前选中项
     * @member
     * @protected
     * @returns {any}
     */
    @config({required: true, type: Object, default: null })
    protected currentItem;

    /**
     * 当前选中项
     * @member
     * @protected
     * @returns {any}
     */
    @config({required: true, type: String, default: "" })
    protected keyword;

    protected onOperations(opsName: string)
    {
        this.$emit("operations", opsName, this.detail);
    }
}
</script>

<style lang="less" scoped>
@import "~styles/views/manage-detail";
</style>
