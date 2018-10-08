<template>
   <div class="Item">

       <div class="image">
           <img :src=item.image>
           <p class="item-name">{{item.name}}</p>
           <p class="item-price">${{item.price}}</p>
       </div>

       <div class="button-container">
           <div id="ItemSizePicker">
               <p>Pick a size</p>
               <select v-model="size">
                   <option v-for="size in this.item.sizes" :key="size">{{size}}</option>
               </select>
           </div>

           <div id="ItemAddButton">
               <button @click="addToCart(item)">Add To Cart</button>
           </div>

       </div>


   </div>
</template>

<script>

    export default {
        name: 'item',
        props: ['item'],
        data() {
            return {
                size: ''
            }
        },
        methods: {
            addToCart(item) {
                if(this.size !== '') {
                    this.$store.commit({
                        type: 'addToCart',
                        id: item.id,
                        shoe: item.name,
                        size: this.size,
                        price: item.price
                    })
                }
            }
        }
    }
</script>

<style>

img {
    width: 100%;
}

.Item {
    width: 100%;
    padding: 10px;
}


@media screen and (min-width: 630px) {
    .Item {
        width: 50%;
    }
}
@media screen and (min-width: 940px) {
    .Item {
    width: 33%;
    }
}

.image {
    position: relative;
    color: white;
}

.item-name {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    padding: 10px;
}


.item-price {
    position: absolute;
    bottom: 6px;
    left: 0;
    background: rgb(0,0,0,0.5);
    padding: 10px;
}

.button-container {
    display: flex;
    justify-content:space-between;
}
</style>
