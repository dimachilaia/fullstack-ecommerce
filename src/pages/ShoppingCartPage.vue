<template>
  <div>
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-else>
      <div class="shopping-cart-container" v-if="cartItems.length > 0">
        <ShoppingCartsList @remove-from-cart="removeFromCart($event)" :CartItems="cartItems" />
        <router-link to="/checkout">
          <button class="checkout-button">Checkout</button>
        </router-link>
      </div>
      <div v-else class="empty-cart-message">Your cart is empty.</div>
    </div>
  </div>
</template>

<script>
import ShoppingCartsList from "../components/ShoppingCartsList.vue";
import { fetchCartItems, removeFromCart } from "../store/Cart";
import { useToast } from "vue-toastify";

export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartItems: [],
      loading: true,
    };
  },
  components: {
    ShoppingCartsList,
  },
  methods: {
    async removeFromCart(productId) {
      const toast = useToast();
      await removeFromCart("12345", productId);
      this.cartItems = await fetchCartItems("12345");
      this.loading = false;
      toast.success("Item removed from cart successfully!");
      this.cartItemsCount.count = this.cartItems.length;
    },
  },
  inject: ["cartItemsCount"],
  async created() {
    this.cartItems = await fetchCartItems("12345");
    this.loading = false;
  },
};
</script>

<style></style>
