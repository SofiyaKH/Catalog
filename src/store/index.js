import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: []
  },

  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    CART_QUANTITY(state) {
      return state.cart.reduce((acc, val) => {
        acc += val.quantity;
        return acc
      }, 0);
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, products) => {

      if (state.cart.includes(products)) {
        products.quantity++
      } else {
        state.cart.push(products);
        products.quantity++
      }


    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },

  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const products = await axios('http://localhost:3000/products', {
          method: 'GET'
        });
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      }
      catch (err) {
        console.log(err);
        return err;
      }


    },

    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },

    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },

  modules: {
  }
})
