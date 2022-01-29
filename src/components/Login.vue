
<template>
  <div class="login">
    <img class="login__logo" alt="Vue logo" src="./../assets/sibdev-logo.png" />

    <h3 class="login__title">Вход</h3>

    <form class="login__form" action="">
      <div class="login__container">
        <label class="login__label" for="">Логин</label>
        <input class="login__input-login" type="text" />
      </div>

      <div class="login__container">
        <label class="login__label" for="">Пароль</label>
        <input
          class="login__input-password"
          id="password-input"
          type="password"
          @focus="onFocus" 
          @blur="onBlur"
        />
        <a
          href="#"
          class= "password-control"
          :class="getClassButtonPassword"
          @mousedown.prevent="showHidePassword"
        ></a>
      </div>

      <input class="login__button" type="submit" value="Войти" @click.prevent/>

    </form>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
    viewPassword: boolean = true
    focused: boolean = false


    onFocus() {
      this.focused = true
    }

    onBlur() {
      this.focused = false
    }

    get getClassButtonPassword(): string { 

        if (this.viewPassword == false && this.focused) {
            this.viewPassword = true  
            return 'focused-un-show'
        }
        else if(this.viewPassword == true && this.focused){
            this.viewPassword = false
            return 'focused-show'
        }
        else {
            this.viewPassword = false
            return 'unfocused'
            }
    }

    @Watch('focused')
    @Watch('viewPassword')
    showHidePassword() {
        const input = document.getElementById('password-input') as any  
        if (this.viewPassword == false && this.focused) {
            this.viewPassword = true  
            input.setAttribute('type', 'text')
        }
        else if(this.viewPassword == true && this.focused){
            this.viewPassword = false
            input.setAttribute('type', 'password')
        }

        else input.setAttribute('type', 'password')
    }

}
</script>


<style lang="sass" scoped>
.login
    position: absolute
    text-align: center
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 510px
    height: 520px
    background: #fff
    border: 1px solid rgba(39, 39, 39, 0.1)

    &__logo
        margin-top: 40px

    &__title
        margin-top: 40px

    &__form
        margin-top: 20px
        display: flex
        align-items: center
        flex-direction: column

        .login__container
            position: relative
            display: flex
            flex-direction: column
            align-items: flex-start
            margin-bottom: 20px

            >input
                position: relative
                border: 1px solid rgba(23, 23, 25, 0.2)
                box-sizing: border-box
                border-radius: 5px
                width: 334px
                height: 48px
                font-size: 20px
                padding-left: 15px

                &:focus
                    background: rgba(197, 228, 249, 0.3)
                    border: 1px solid #1390E5
                    outline: 0

            .password-control
                position: absolute
                top: 70%
                right: 15px
                transform: translate(0, -70%)
                display: inline-block
                width: 24px
                height: 24px

            .focused-show
                background: url(./../assets/eye.png) 

            .unfocused
                background: url(./../assets/eye-grey-off.png) 

            .focused-un-show
                background: url(./../assets/eye-blue-off.png) 


    &__label
        color: rgba(23, 23, 25, 0.3)
        font-size: 16px

    &__button
        margin-top: 20px
        background: #1390E5
        width: 176px
        height: 52px
        border-radius: 5px
        color: #fff
        font-size: 20px
        border: 0
</style>