<template>
  <div class="shopping-cart-container" v-if="cartItems.length > 0">
    <ShoppingCartsList @remove-from-cart="removeFromCart($event)" :CartItems="cartItems" />
    <button class="checkout-button">Checkout</button>
  </div>
  <div v-else class="empty-cart-message">Your cart is empty.</div>
</template>

<script>
import axios from "axios";
import ShoppingCartsList from "../components/ShoppingCartsList.vue";
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
      const response = await axios.delete(`/api/users/12345/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    const response = await axios.get("/api/users/12345/cart");
    const cartItems = response.data;
    console.log(cartItems);
    this.cartItems = cartItems;
  },
};
</script>
