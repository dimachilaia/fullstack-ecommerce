<template>
  <nav class="navbar">
    <router-link to="/products" class="navbar-link products-link">Products</router-link>
    <router-link to="/cart" class="navbar-link cart-link">
      Shopping Cart
      <span class="cart-count" >{{ cartItemsCount.count }}</span>
    </router-link>
  </nav>
</template>

<script>
import { inject } from 'vue';

export default {
  name: "NavBar",
  setup() {
    const cartItemsCount = inject('cartItemsCount');

    return {
      cartItemsCount
    };
  }
};
</script>

<style>
.cart-count {
  background-color: red;
  color: white;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 0.8em;
  margin-left: 5px;
}
</style>
