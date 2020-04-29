<template>
    <div class="login-layout">
        <div class="login-intro">

        </div>

        <div class="login-content">
            <h1 class="form-title">请登录</h1>

            <form class="login-form">
                <div class="form-group">
                    <div class="form-item">
                        <switch-input :id="'inputAccount'" :placeholder="'用户账号'" :type="'text'"></switch-input>
                    </div>
                    <div class="form-item">
                        <switch-input :id="'inputPassword'" :placeholder="'密码'" :type="'password'"></switch-input>
                    </div>
                </div>

                <div class="addition">
                    <i-checkbox class="remember">记住密码</i-checkbox>
                    <a>忘记密码？</a>
                </div>

                <button type="submit" class="login-btn">登录</button>
            </form>

        </div>
    </div>
</template>

<script lang="ts">
import { component, View, mixins, config, watch } from "uxmid-web";
import CommonView from "src/views/common-view";
import SwitchInput from "./switch-input.vue";

@component({
    components:
    {
        "switch-input": SwitchInput
    }
})
export default class Login extends CommonView
{

}
</script>

<style lang="less" scoped>
.login-layout
{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    .login-intro
    {
        display: flex;
        flex: 1 1 55%;
        background: url("~assets/login.png") no-repeat center center / cover;
    }
    .login-content
    {
        display: flex;
        flex-direction: column;
        flex: 1 1 45%;

        .form-title
        {
            max-width: 560px;
            width: 100%;
            font-size: 40px;
            color: #182334;
            font-weight: 400;
            line-height: 40px;
            margin-bottom: 73px;
            padding-left: 15%;
            padding-top: 22%;
        }

        .login-form
        {
            width: 100%;
            padding-left: 15%;
            padding-right: 20%;

            .form-group
            {
                display: flex;
                flex-direction: column;
                border: 1px solid rgba(242,242,246,1);

                .form-item
                {
                    width: 100%;
                    border-bottom: 1px solid rgba(242,242,246,1);
                    position: relative;
                }
                .form-item:last-child
                {
                    border-bottom: none;
                }
            }

            .addition
            {
                display: flex;
                justify-content: space-between;
                margin-top: 29px;
                font-size: 16px;
                line-height: 16px;

                a
                {
                    color: #5D6673;
                }
                a:hover
                {
                    color: darken(#5D6673, 10%);
                }
                .remember
                {
                    font-size: inherit;
                    color: #5D6673;

                    @{deep}.ivu-checkbox-checked
                    {
                        .ivu-checkbox-inner
                        {
                            border-color: #2D52F2;
                            background-color: #2D52F2;
                        }
                    }
                }
            }

            .login-btn
            {
                display: block;
                width: 184px;
                height: 52px;
                margin-top: 75px;
                font-size: 18px;
                background-color: #2D52F2;
                border-color: #2D52F2;
                color: #fff;
                -webkit-appearance: none;
                -webkit-user-select: none;
                border: none;
                border-radius: 2px;
            }
        }
        
    }
}
</style>