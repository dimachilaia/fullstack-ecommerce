<template>
  <div v-if="product" class="product-detail-container">
    <img :src="product.imageName" class="product-detail-image" />
    <h1 class="product-detail-name">{{ product.name }}</h1>
    <h3 class="product-detail-price">{{ product.price }}</h3>
    <button class="product-detail-button">Add to Cart</button>
  </div>
  <div v-else>
    <p class="product-not-found">Product not found.</p>
  </div>
</template>

<script>
import { products } from "../temp-data";

export default {
  name: "ProductDetailPage",
  computed: {
    product() {
      const productId = parseInt(this.$route.params.productId);
      return products.find((product) => product.id === productId);
    },
  },
};
</script>
