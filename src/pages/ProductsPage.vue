<template>
  <div>
    <ProductsList :products="products" />
    <div class="pagination">
      <button @click="goToPage(Number(page) - 1)" :disabled="Number(page) <= 1">Previous</button>
      <button @click="goToPage(Number(page) + 1)" :disabled="products.length <= 2">Next</button>
    </div>
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import axios from "axios";

export default {
  name: "ProductsPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      products: [],
      page: 1,
    };
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get("/api/products", {
        params: {
          page: this.page,
          limit: 3,
        },
      });
      this.products = response.data;
    },
    goToPage(newPage) {
      if (!isNaN(newPage) && newPage > 0) {
        this.page = newPage;
        this.fetchProducts();
        this.$router.push({ path: "/products", query: { page: newPage } });
      }
    },
  },
  watch: {
    "$route.query.page": {
      handler(newVal) {
        const newPage = Number(newVal) || 1;
        this.page = newPage;
        this.fetchProducts();
      },
      immediate: true,
    },
  },
};
</script>
