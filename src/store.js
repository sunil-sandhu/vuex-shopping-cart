import Vue from 'vue'
import Vuex from 'vuex'

import KnittedSockBoot from './assets/knitted-sock-boots.jpeg'
import SquareToeAnkleBoots from './assets/square-toe-ankle-boots.jpeg'
import ChelseaBoots from './assets/chelsea-boots.jpeg'
import ChunkyChelseaBoots from './assets/chunky-chelsea-boots.jpeg'
import PatentAnkleBoots from './assets/patent-ankle-boots.jpeg'
import BlackStuddedChelseaBoots from './assets/black-studded-chelsea-boots.jpeg'


Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    items: [
        {
            id: 1,
            name: 'Chelsea boots',
            sizes: [3, 4, 5, 6, 7, 8],
            price: 45,
            image: ChelseaBoots
        },
        {
            id: 2,
            name: 'Knitted sock boots',
            sizes: [3, 4, 5, 6, 7, 8],
            price: 80,
            image: KnittedSockBoot
        },
        {
            id: 3,
            name: 'Square toe ankle boots',
            sizes: [4, 5, 7, 8],
            price: 40,
            image: SquareToeAnkleBoots
        },
        {
            id: 4,
            name: 'Chunky Chelsea boots',
            sizes: [3, 4, 5, 6, 7],
            price: 60,
            image: ChunkyChelseaBoots
        },
        {
            id: 5,
            name: 'Patent ankle boots',
            sizes: [3, 4, 5, 8],
            price: 70,
            image: PatentAnkleBoots
        },
        {
            id: 6,
            name: 'Black studded Chelsea Boots',
            sizes: [8],
            price: 100,
            image: BlackStuddedChelseaBoots
        },
    ],
    cart: []
  },
  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  getters: {
      total: state => {
            if(state.cart.length > 0) {
                return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
      }
  },
  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
    mutations: {
        addToCart(state, payload) {
            return state.cart.push(payload);
        }
    },
  // actions are effectively the functions that get called by your components in order to trigger a mutation.
  actions: {
      // add(context) {
      //     context.commit('add')
      // }
  }
})
