<template>
    <div class="container">
        <div class="row">
            <div class="col s6 offset-s3">
                <i class="">
                    Корзина ({{ $store.state.cartCount }})
                </i>
                <div v-if="$store.state.cart.length > 0" class="">
                    <span v-for="item in $store.state.cart"
                        :key="item.id"
                        class="row cart__content"
                        href=""
                    >
                        <div class="col">                            
                            {{item.name}}
                        </div>                        
                        <div class="col d-flex align-items-center">                            
                                <div class="number">
                                    <span class="minus" @click="quantityDown(item)">-</span>
                                    <input type="text" v-model="item.quantity">
                                    <span class="plus"  @click="quantityUp(item)">+</span>
                                </div>
                        </div>
                        <div class="col d-flex align-items-center">{{ item.price }} Р/шт.</div>
                        <div class="col d-flex align-items-center">
                            <button class="btn btn-danger btn-sm"
                                title="Удалить из корзины"
                                @click.prevent="removeFromCart(item)">Удалить
                            </button>
                        </div>                        
                    </span>                  
                
                    <i class="navbar-item">
                        Итого: {{ totalPrice }} P
                    </i>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="">
                        К оплате
                    </a>
                </div>
                <div v-else class="navbar-dropdown is-boxed is-right">
                    <a class="navbar-item" href="">
                        Корзина пуста
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            
        }
    },
    props: {
        title: String
    },
    methods: {
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
        quantityUp(item) {
            if(item.quantity < Number(item[4])) item.quantity ++;// проверка на остаток товара
            else alert('Количество "' + item.name +'" ограничено');            
                    
        },
        quantityDown(item) {
            if( item.quantity > 1 ) {
                item.quantity --;
            }
            
        },        
    },
    computed: {
        totalPrice() {//пересчет "итого"
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += Number(item.price * item.quantity);
                           }
            
            return total;
        }
    },
    mounted(){
        
    }
}
</script>

<style>
	span {cursor:pointer; }
	.number{
		margin:0px;
		}
	.minus, .plus{
        width:24px;
        height:24px;
        background:#f2f2f2;
        border-radius:4px;
        
        border:1px solid #ddd;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
	}
	input{
		height:24px;
        width: 50px;
        text-align: center;
        font-size: 16px;
		border:1px solid #ddd;
		border-radius:4px;
        display: inline-block;
        vertical-align: middle;
    }
    .cart__content {
        border-bottom: 1px solid;
    }
</style>