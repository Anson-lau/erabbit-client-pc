import { createStore } from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    cart,
    user,
    category
  },

  plugins: [
    createPersistedState({
      key: 'erabbit-client-pc-store',
      path: ['user', 'cart']
    })
  ]
})
