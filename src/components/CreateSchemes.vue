
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
                <h2>Новая схема</h2>
                <div class="schema__input">
                    <label for="">Название схемы</label>
                    <input type="text" placeholder="Укажите название схемы">
                </div>
            </div>
            <hr>

            <div class="schema__container">
                <h2>Свойства схемы</h2>
                <span>Схема должна содержать ходябы одно свойство</span>

                <div class="schema__properties">
                    <div class="schema__input">
                        <label for="">Ключ свойства</label>
                        <input type="text" placeholder="Укажите ключ свойства">

                        <label for="">Название свойства</label>
                        <input type="text" placeholder="Укажите название свойства">

                        <label for="">Поле для отображения</label>
                        <input type="text" placeholder="Выберите поле для отображение">
                    </div>
                </div>
                    
                <div class="schema__buttons">
                    <input class="schema__add-property" type="submit" value="Добавить новое свойство" @click.prevent/>
                    <input class="schema__save" type="submit" value="Сохранить схему" @click.prevent/>
                </div>
          
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
    &__body
        padding:0 10%

        >hr
            height: 1px
            background: #C4C4C4
            margin-top:30px
            border: 0

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

        >span
            margin-bottom: 28px
            font-size: 16px
            opacity: 0.5

        >h2
            margin-top: 40px

        &:focus
            background: rgba(197, 228, 249, 0.3)
            border: 1px solid #1390E5
            outline: 0

    &__buttons
        display: flex
        justify-content: space-between
        width: 100%

    &__add-property
        width: 286px
        margin-top: 42px
        height: 52px
        font-size: 20px
        color: #1390E5
        background: none
        border: 1px solid #1390E5
        box-sizing: border-box
        border-radius: 5px


    &__save
        background: #1390E5
        margin-top: 42px
        width: 210px
        height: 52px
        border-radius: 5px
        color: #fff
        font-size: 20px
        border: 0

.schema__properties
    background: #fff
    width: 100%
    padding: 21px 38px 30px
    border-bottom: 1px solid rgba(23, 23, 25, 0.3)

.schema__input
    display: flex
    flex-direction: column
    align-items: flex-start

    >label
        margin-top: 20px
        font-size: 16px


    >input
        margin-top: 3px
        height: 48px
        width: 422px
        font-size: 20px
        padding-left: 15px
        border: 1px solid rgba(23, 23, 25, 0.2)
        box-sizing: border-box
        border-radius: 5px
</style>