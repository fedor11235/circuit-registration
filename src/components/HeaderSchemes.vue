
<template>
    <div class="header">
      <div class="header__logo-container">
        <span
          ><img
            class="header__logo"
            alt="Vue logo"
            src="./../assets/shemes-sibdev-logo.png"
        /></span>
      </div>
      <div class="header__my-schema"><span> Мои схемы </span></div>
      <div class="header__create-scheman"><span>Создать схему</span></div>
      <div class="header__exit"><span>Выйти</span></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderSchemes extends Vue {}
</script>


<style lang="sass" scoped>
.header
    height: 80px
    background-color: #fff
    padding: 0 10%

    >div
        display: flex
        justify-content: center
        margin-left: 20px
        font-size: 18px
        color: #1390E5

        >span
            position: relative
            display: flex
            align-items: center
            height: 80px
            cursor: pointer

        >span:after
            position: absolute
            width: 0
            bottom: 0
            height: 2px
            background-color: #1390E5
            content: ""
            transition: width 0.3s ease-out

        >span:hover:after
            width: 100%

    &__logo-container
        >span
            cursor: default !important
        >span:after
            display: none

    &__logo-container
        float: left
        margin-left: 0 !important

    &__logo
        width: 48px
        height: 48px

    &__my-schema
        float: left
        width: 142px

    &__create-scheman
        float: left
        width: 168px

    &__exit
        float: right
        width: 100px

</style>