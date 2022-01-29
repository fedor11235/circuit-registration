import Vue from 'vue'
import Vuex from 'vuex'
// import { IUserState } from './modules/user'

Vue.use(Vuex)

interface IUserState {
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
  }

export interface IRootState {
  user: IUserState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})