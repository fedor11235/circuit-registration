
<template>
  <div class="schema">
      <header>
            <div class="schema__logo-container">
                <span><img class="schema__logo" alt="Vue logo" src="./../assets/shemes-sibdev-logo.png" /></span>
            </div>
            <div class="schema__my-schema"><span> Мои схемы </span></div>
            <div class="schema__create-scheman"><span>Создать схему</span></div>
            <div class="schema__exit"><span>Выйти</span></div>
      </header>

      <div class="schema__body">
            <div class="schema__container">
                <h2>Мои схемы</h2>
                <div class="schema__search-request">
                    <div class="schema__request-item">
                        
                    </div>
                    
                </div>
                <input class="schema__button" type="submit" value="Создать схему" @click.prevent/>
          
            </div>
      </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class Schemes extends Vue {
}
</script>


<style lang="sass" scoped>
.schema
    >header
        height: 80px
        background-color: #fff
        padding:0 10%

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

    &__container
        display: flex
        width: 100%
        flex-direction: column
        align-items: flex-start
        padding:0 10%

        >h2,input
            margin: 40px 0 0
            cursor: pointer

        >input
            background: #1390E5
            width: 185px
            height: 52px
            border-radius: 5px
            color: #fff
            font-size: 20px
            border: 0


</style>