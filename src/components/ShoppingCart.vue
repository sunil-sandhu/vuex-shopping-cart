<template>
    <div id="ShoppingCart">
        <p>Your Cart</p>
        <p>No. of items: {{cart.length}}</p>
        <p>Total: ${{total}}</p>
    </div>
</template>

<script>
export default {
    name: 'shopping-cart',
    components: {},
    props: ['cart', 'total'],
    computed: {

    }
}
</script>

<style>
p {
    margin: 0;
}

#ShoppingCart {
    padding: 10px;
    border-radius: 5px;
    background: #494949;
}
</style>
