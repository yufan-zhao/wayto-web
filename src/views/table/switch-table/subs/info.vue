<template>
    <div class="sub-detail overall">
        <h3 class="sub-detail-title">基础信息</h3>
        <div class="u-form-container sub-content">
            <i-form class="u-form" label-position="left">
                <i-row type="flex" justify="start" class="u-row">
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="微信号">
                            wx1111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="手机">
                            131111111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="最近登录">
                            2020-4-28
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="微信号">
                            wx1111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="手机">
                            131111111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="最近登录">
                            2020-4-28
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="微信号">
                            wx1111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="手机">
                            131111111
                        </i-form-item>
                    </i-col>
                    <i-col class-name="u-col" span="8">
                        <i-form-item class="u-form-item" :label-width="76" label="最近登录">
                            2020-4-28
                        </i-form-item>
                    </i-col>
                </i-row>
            </i-form>
        </div>

        <h3 class="sub-detail-title">基础信息</h3>
        <div class="sub-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
        <h3 class="sub-detail-title">基础信息</h3>
        <div class="sub-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
        <h3 class="sub-detail-title">基础信息</h3>
        <div class="sub-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
        <h3 class="sub-detail-title">基础信息</h3>
        <div class="sub-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
    </div>
</template>

<script lang="ts">
import { component, View, mixins, config, watch } from "uxmid-web";
import CommonView from "src/views/common-view";

@component
export default class Info extends CommonView
{
    
}
</script>

<style lang="less" scoped>
@import "~styles/views/sub-detail";
</style>