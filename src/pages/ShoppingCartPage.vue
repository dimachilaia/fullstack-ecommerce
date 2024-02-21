<template>
  <div class="shopping-cart-container" v-if="cartItems.length > 0">
    <ShoppingCartsList @remove-from-cart="removeFromCart($event)" :CartItems="cartItems" />
    <router-link to="/checkout">
      <button class="checkout-button">Checkout</button>
    </router-link>
  </div>
  <div v-else class="empty-cart-message">Your cart is empty.</div>
</template>

<script>
import ShoppingCartsList from "../components/ShoppingCartsList.vue";
import { fetchCartItems, removeFromCart } from "../store/Cart";
export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartItems: [],
    };
  },
  components: {
    ShoppingCartsList,
  },
  methods: {
    async removeFromCart(productId) {
      await removeFromCart("12345", productId);
      this.cartItems = await fetchCartItems("12345");
    },
  },
  async created() {
    this.cartItems = await fetchCartItems("12345");
  },
};
</script>
