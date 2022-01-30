
<template>
  <div class="schema-creation">

    <HeaderSchemes />

    <div class="schema-creation__body">
      <div class="schema-creation__container">
        <h2>Новая схема</h2>
        <div class="schema-creation__input">
          <label for="">Название схемы</label>
          <input type="text" placeholder="Укажите название схемы" />
        </div>
      </div>
      <hr />

      <div class="schema-creation__container" @click="isOpen = !isOpen">
        <h2>Свойства схемы</h2>
        <span>Схема должна содержать ходя бы одно свойство</span>

        <div class="schema-creation__properties" ref="properties">
            <Properties />
        </div>

        <div class="schema-creation__buttons">
          <input
            class="schema-creation__add-property"
            type="submit"
            value="Добавить новое свойство"
            @click.prevent = "addProperty"
          />
          <input
            class="schema-creation__save"
            type="submit"
            value="Сохранить схему"
            @click.prevent
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Properties from '@/components/Properties.vue'
import HeaderSchemes from '@/components/HeaderSchemes.vue'

@Component({
  components: {
    Properties,
    HeaderSchemes,
  }
})


export default class Schemes extends Vue {
    isOpen: boolean = false
    items: any = 0

    addProperty(): void {
        const property = new Properties();
        property.$mount() as Vue
        (this.$refs.properties as Element).appendChild(property.$el)
    }

}
</script>


<style lang="sass" scoped>
.schema-creation
    &__body
        padding: 0 10%

        >hr
            height: 1px
            background: #C4C4C4
            margin-top: 30px
            border: 0

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

    &__properties
        width: 100%

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

    &__input
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