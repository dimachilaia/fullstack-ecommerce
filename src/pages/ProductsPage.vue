<template>
  <div>
    <h1 class="products-title">Products</h1>
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.imageName" alt="image" class="product-image" />
        <h4 class="product-name">{{ product.name }}</h4>
        <p class="product-price">{{ product.price }}</p>
        <button class="product-button">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/temp-data";

export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    };
  },
};
</script>
