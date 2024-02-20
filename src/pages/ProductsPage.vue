<template>
  <div>
    <h1 class="products-title">Products</h1>
    <ProductsList :products="products"/>
  </div>
</template>

<script>
import { products } from "@/temp-data";
import ProductsList from "../components/ProductsList.vue";

export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    };
  },
  components: {
    ProductsList,
  },
};
</script>
