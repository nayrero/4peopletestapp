<template>
  <div class="container">
    <h1>{{ msg }}</h1>    
    <table class="highlight responsive-table">        
        <thead>
            <tr>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Цена</th>                
            </tr>
        </thead>

        <tbody v-for="(value, index) in sortedData" :key="index" class="table__content">          
            <div class="category">{{ names[index].G }}</div>
            <tr v-for="(item, index2) in value" :key="index2">
            <td>{{ names[index].B[item.T].N }}</td>            
            <td >{{ item.P }}</td>
            <td class="table__price"
                            
             >
             <input type="text" v-model="item.C"  :style="{ color: item.color }" readonly>             
             </td>
            <td>
                <a class="btn btn-success btn-sm" @click="addToCart([index, item.T, item.C, item.name, item.P])">В корзину</a></td>
            </tr>
            
        </tbody>
      </table>           
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Goods',
  data(){
    return{
      goods: [],
      map: new Map(),
      sortedData: {},
      rate: 20,
      activeColor: 'black',      
      names: {
          "1": {
              "G": "Книги",
              "B": {
                  "1": {
                      "N": "Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.",
                      "T": 1
                  },
                  "2": {
                      "N": "Совершенный код. Стив Макконнелл.",
                      "T": 1
                  },
                  "3": {
                      "N": "JavaScript. Подробное руководство. Дэвид Флэнаган.",
                      "T": 1
                  }
              }
          },
          "2": {
              "G": "Еда",
              "C": 2,
              "B": {
                  "7": {
                      "N": "Овсяные пирожные с шоколадной прослойкой",
                      "T": 3
                  },
                  "8": {
                      "N": "Суп с пекинской капустой",
                      "T": 3
                  },
                  "85": {
                      "N": "Вишня в коньяке",
                      "T": 3
                  },
                  "86": {
                      "N": "Постный фаршированный перец",
                      "T": 3
                  },
                  "109": {
                      "N": "Салат Подсолнух",
                      "T": ""
                  },
                  "110": {
                      "N": "Форель «Эрланген»",
                      "T": ""
                  },
                  "111": {
                      "N": "Салат с морепродуктами",
                      "T": 3
                  },
                  "112": {
                      "N": "Тёртый пирог",
                      "T": 3
                  },
                  "115": {
                      "N": "Свинина, маринованная в красном вине, с кориандром",
                      "T": ""
                  },
                  "116": {
                      "N": "Салат с черносливом и ветчиной",
                      "T": ""
                  },
                  "125": {
                      "N": "Болгарский перец и цуккини на гриле",
                      "T": 3
                  },
                  "126": {
                      "N": "Салат «Букет нарциссов»",
                      "T": 3
                  },
                  "127": {
                      "N": "Салат из морепродуктов, с огурцами, рукколой и оливками",
                      "T": 3
                  }
              }
          },
          "5": {
              "G": "Спорт",
              "C": 2,
              "B": {
                  "184": {
                      "N": "Беговая дорожка",
                      "T": 1
                  },
                  "185": {
                      "N": "Гантели съемные",
                      "T": 1
                  },
                  "186": {
                      "N": "Ружьё охотничье",
                      "T": 1
                  },
                  "187": {
                      "N": "Велотренажер",
                      "T": 1
                  }
              }
          },
          "8": {
              "G": "Сантехника",
              "C": 3,
              "B": {
                  "4": {
                      "N": "Акриловая ванна Alpen Mars ",
                      "T": 1
                  },
                  "5": {
                      "N": "Смеситель Sturm Classica",
                      "T": 1
                  },
                  "6": {
                      "N": "Тумба с раковиной Tiffany World ",
                      "T": 1
                  }
              }
          },
          "10": {
              "G": "Запчасти для машин",
              "C": 3,
              "B": {
                  "191": {
                      "N": "Амортизатор задний CX-5 ",
                      "T": 3
                  },
                  "192": {
                      "N": "Пружина амортизатора ",
                      "T": 3
                  },
                  "193": {
                      "N": "Корпус воздушного фильтра ",
                      "T": 3
                  },
                  "194": {
                      "N": "Ремень приводной",
                      "T": 3
                  },
                  "195": {
                      "N": "Диффузор радиатора",
                      "T": 1
                  },
                  "196": {
                      "N": "Фильтр АКПП",
                      "T": 3
                  }
              }
          },
          "15": {
              "G": "Сувениры",
              "C": 2,
              "B": {
                  "11": {
                      "N": "Набор для рисования Пастель",
                      "T": 3
                  },
                  "12": {
                      "N": "Брелок-рулетка",
                      "T": 3
                  },
                  "63": {
                      "N": "Брелок-открывалка",
                      "T": 3
                  },
                  "64": {
                      "N": "Ручка-стилус шариковая",
                      "T": 3
                  },
                  "146": {
                      "N": "Браслет",
                      "T": 3
                  },
                  "147": {
                      "N": "Чехол для очков",
                      "T": 3
                  },
                  "148": {
                      "N": "Сумка для выставок",
                      "T": 3
                  }
              }
          }
      }      
    }
    
  },
  computed: {
      
  },
  methods: {
    ...mapActions([
        'LOAD_JSON'
    ]),    
    dataFilter() {
        this.goods = this.$store.getters.PRODUCTS;
        if(this.map) this.map.clear();        
        for(let i = 0; i < this.goods.length; i++){//фильтруем товары по группам 
            this.goods[i].C = (this.goods[i].C * this.rate).toFixed(0);//устанавливаем цену в $  
               
            if( this.map.get(this.goods[i].G) ) this.map.get(this.goods[i].G).push(this.goods[i]);
            else this.map.set(this.goods[i].G, [this.goods[i]]);
        }
        this.sortedData = Object.fromEntries(this.map);
        for(let key in this.sortedData){
                    for(let i = 0; i < this.sortedData[key].length; i++ ){
                        this.sortedData[key][i].color = 'black';//добавляем свойство color                         
                        this.sortedData[key][i].name = this.names[key].B[this.sortedData[key][i].T].N;//и свойство name
                                              
                    }                
                }
                      
    },    
    dataUpdate() {
        setInterval(() => {  
            this.rate = this.getRandomRate(20, 80); //меняем rate         
            this.LOAD_JSON() //читаем data.json
            .then(() => {
                this.dataFilter();                                                              
            });                                                           
                      
            }, 10000);
    },
    getRandomRate: function(min, max) {        
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    },
    addToCart(item) {
        this.$store.commit('addToCart', item);
    }    
  },
  mounted(){ 
        this.rate = this.getRandomRate(20, 80); //инициализация rate      
        this.LOAD_JSON() // загрузка данных до таймера
            .then(() => {
                this.dataFilter();                                                                                              
            })
            .then(()=> {
                this.dataUpdate();                
            })       

    },
    created() {

    },
    watch: {
        sortedData: {
            handler: function(Val, oldVal){            
                for(let key in oldVal){
                    for(let i = 0; i < oldVal[key].length; i++ ){
                        if( Number(Val[key][i].C) >= Number(oldVal[key][i].C) ) {
                            Val[key][i].color ='green';                            
                            }
                        else Val[key][i].color ='red';
                    }                
                }
            },
            deep: true
        } 
        
    },
  props: {
    msg: String
  }
}
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
tbody::before
{
  content: '';
  display: block;
  height: 25px;

}
.table__price {
  table-layout: fixed;
  width: 150px;
  overflow:hidden;  
}
.category {
    font-size: 20px;
}
</style>
