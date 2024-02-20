<template>
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.imageName" alt="image" class="product-image" />
        <h4 class="product-name">{{ product.name }}</h4>
        <p class="product-price">{{ product.price }}</p>
        <router-link :to="'/products/' + product.id">
          <button class="product-button">View Details</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductsList",
    props:['products']
  };
  </script>
  