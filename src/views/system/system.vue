<template>
    <div class="v-system">
        系统管理
    </div>
</template>
<script lang="ts">
import { View, component } from "uxmid-web";
import CommonView from "src/views/common-view";
import { service } from "common/decorator";

@component
export default class SystemLayout extends CommonView
{
    protected async created()
    {
        // 示例：若在未登录状态下发送请求则直接打回登录页
        // const res = await this.service.findOrgTree({ name: "" });
        // console.log("组织架构", res);
    }
}
</script>
<style lang="less">
@import "~styles/views/system/system";
</style>
