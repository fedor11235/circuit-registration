
<template>
  <div class="properties">
    <span :class="getClassClick"  @click="isOpen = !isOpen">Свойство 1</span>
    <div class="properties__input" v-if="isOpen">
      <label for="">Ключ свойства</label>
      <input type="text" placeholder="Укажите ключ свойства" />

      <label for="">Название свойства</label>
      <input type="text" placeholder="Укажите название свойства" />

      <label for="">Поле для отображения</label>
      <input type="text" placeholder="Выберите поле для отображение" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Properties extends Vue {
  isOpen: boolean = false

  get getClassClick(): string { 

        if (this.isOpen) 
            return 'properties__click-open'
        
        else 
            return 'properties__click'
            
    }
}
</script>


<style lang="sass" scoped>
.properties
    display: flex
    flex-direction: column
    align-items: flex-start
    background: #fff
    width: 100%
    padding: 21px 38px 30px
    border-bottom: 1px solid rgba(23, 23, 25, 0.3)

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

    &__click
        position: relative
        cursor: pointer
        font-size: 18px

        &:before 
          content: url(./../assets/right-arrow.png) 
          position: absolute
          left: -11px
          top:-1px
          border-right-color: #eee

        &-open
          position: relative
          cursor: pointer
          font-size: 18px

          &:before 
            content: url(./../assets/down-arrow.png) 
            position: absolute
            left: -15px
            top:-3px
            border-right-color: #eee
        
</style>