<template>
  <div>
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-else class="checkout-container">
      <h2>Checkout</h2>
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item._id" class="cart-item">
          <img :src="item.imageName" alt="product image" class="cart-item-image" />
          <div class="cart-item-info">
            <p class="cart-item-name">{{ item.name }}</p>
            <p class="cart-item-price">{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div class="total-price-container">
        <p class="total-price">Total Price: {{ totalPrice }}</p>
      </div>
      <button class="checkout-button">Proceed to Payment</button>
    </div>
  </div>
</template>

<script>
import { fetchCartItems } from "../store/Cart";

export default {
  name: "CheckoutPage",
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
      loading: true,
    };
  },
  async created() {
    this.cartItems = await fetchCartItems("12345");
    this.calculateTotal();
    this.loading = false;
  },
  methods: {
    calculateTotal() {
      const total = this.cartItems.reduce((acc, item) => {
        const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
        return acc + price;
      }, 0);
      this.totalPrice = `$${total.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.checkout-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.total-price-container {
  margin-top: 20px;
  text-align: right;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #0056b3;
}
</style>
