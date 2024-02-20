<template>
  <div v-if="product" class="product-detail-container">
    <img :src="product.imageName" class="product-detail-image" />
    <h1 class="product-detail-name">{{ product.name }}</h1>
    <h3 class="product-detail-price">{{ product.price }}</h3>
    <button @click="addToCart" class="product-detail-button" v-if="!itemIsInCart">Add to Cart</button>
    <button v-else disabled>Item is in the cart...!</button>
  </div>
  <div v-else>
    <p class="product-not-found">Product not found.</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
      cartItems: [],
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some((item) => item.id === this.$route.params.productId);
    },
  },
  methods: {
    addToCart() {
      axios.post("/api/users/12345/cart", {
        id: this.$route.params.productId,
      });
      alert("added successfully");
    },
  },
  async created() {
    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    const cartResponse = await axios.get("/api/users/12345/cart");
    const cartItems = cartResponse.data;
    this.cartItems = cartItems;
  },
};
</script>
