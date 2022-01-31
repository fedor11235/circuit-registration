
<template>
  <div class="properties" :class="getClassProperties">
    <div class="properties__head">
      <span :class="getClassClick"  @click="isOpen = !isOpen">Свойство {{index}}</span>
      <img @click="deleteSelf" class="properties__trash" src="./../assets/trash.png">
    </div>
    <div class="properties__input" v-if="isOpen">
      <label for="keyProperties">Ключ свойства</label>
      <input type="text" id="keyProperties" v-model="keyProperties" name="keyProperties" placeholder="Укажите ключ свойства" />

      <label for="nameProperties">Название свойства</label>
      <input type="text" id="nameProperties" v-model="nameProperties" name="nameProperties" placeholder="Укажите название свойства" />

      <label for="">Поле для отображения</label>
      <input type="text" id="displayField" v-model="displayField" name="displayField" placeholder="Выберите поле для отображение" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Properties extends Vue {
  isOpen: boolean = false

  keyProperties: string = ''
  nameProperties: string = ''
  displayField: string = ''

  @Prop () readonly index!: number

  get getClassClick(): string { 
        return this.isOpen ? 'properties__click-open' : 'properties__click'    
    }

  get getClassProperties(): string { 
        return this.isOpen ? 'properties_white' : ''    
    }

  @Watch('keyProperties')
  @Watch('nameProperties')
  @Watch('displayField')
  @Watch('index')
  emitParameter(): void { 
    this.$emit('create', {
      keyProperties : this.keyProperties,
      nameProperties : this.nameProperties,
      displayField : this.displayField,
      index : this.index,
    })

    }

  deleteSelf(): any { 
      this.$emit('delete', {index: this.index});
      (this.$root.$el.parentNode as any).removeChild(this.$el)
    }
}
</script>


<style lang="sass" scoped>
.properties
    display: flex
    flex-direction: column
    align-items: flex-start
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

    &_white
      background: #fff

    &__head
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 100%

    &__trash
      cursor: pointer
        
</style>