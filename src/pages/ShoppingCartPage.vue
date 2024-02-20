<template>
  <div class="shopping-cart-container" v-if="CartItems.length > 0">
    <div class="cart-item" v-for="item in CartItems" :key="item.id">
      <img class="cart-item-image" :src="item.imageName" />
      <p class="cart-item-name">{{ item.name }}</p>
      <p class="cart-item-price">{{ item.price }}</p>
      <button class="cart-remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Checkout</button>
  </div>
  <div v-else class="empty-cart-message">Your cart is empty.</div>
</template>

<script>
import { CartItems } from "@/temp-data";
export default {
  name: "ShoppingCartPage",
  data() {
    return {
      CartItems,
    };
  },
};
</script>
