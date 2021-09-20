import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {      
      products: [],
      cart: [],
      cartCount: 0,      
    },
    mutations: {
      SET_API_DATA: (state, payload) => {
        state.products = payload;
      },
      addToCart(state, item) {
        let found = state.cart.find( 
          function checkNumber( currentValue ) {
            return currentValue[0] == item[0] && currentValue[1] == item[1] ; 
          } 
        );
        if (found) {          
            found.quantity++;        
          
        }
        else{
          state.cart.push(item);
          Vue.set(item, 'quantity', 1);
          Vue.set(item, 'price', item[2]);
          Vue.set(item, 'name', item[3]);          
          
        }
        state.cartCount++;
      },
      removeFromCart(state, item) {
        let index = state.cart.indexOf(item);
    
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount -= product.quantity;
    
            state.cart.splice(index, 1);
        }
      }
    },
    actions: {
      LOAD_JSON ({ commit }) {
        return fetch('./data.json')
          .then(response => {
            return response.json();
          })
            .then(data => { 
                //console.log('hello')
              commit('SET_API_DATA', data.Value.Goods);                        
          
          }).catch(err => { 

          console.log(err);
          });
        
      },
      
    },
    getters: {
        PRODUCTS: state => {
            return state.products;
        }
    }
  })