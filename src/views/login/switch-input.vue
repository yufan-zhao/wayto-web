<template>
    <div class="switch-input">
        <input :type="type" :placeholder="placeholder" :id="id" required />
        <label :for="id">{{placeholder}}</label>
    </div>
</template>

<script lang="ts">
import { component, View, mixins, config, watch } from "uxmid-web";

@component
export default class SwitchInput extends View
{

    @config({required: true, type: String})
    protected id: string;

    @config({required: true, type: String})
    protected placeholder: string;

    @config({required: true, type: String, default: "text"})
    protected type: string;

}
</script>

<style lang="less" scoped>
.switch-input
{
    position: relative;

    input,label
    {
        height: 86px;
        line-height: 86px;
        font-size: 18px;
        padding-left: 33px;
        padding-right: 33px;
    }

    input
    {
        border: none;
        width: 100%;
    }
    input:focus
    {
        outline: 0;
    }

    label
    {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0; /* Override default `<label>` margin */
        color: #A6ABB5;
        pointer-events: none;
        cursor: text; /* Match the input under the label */
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }

    input::-webkit-input-placeholder {
        color: transparent !important;
    }
    input::placeholder {
        color: transparent;
    }

    input:not(:placeholder-shown) {
        padding-top: 20px;
    }
    input:not(:placeholder-shown) ~ label {
        top: -18px;
        font-size: 16px;
        color: #A6ABB5;
    }
}
</style>