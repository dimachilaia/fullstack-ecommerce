<template>
  <div>
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-else>
      <ProductsList :products="products" />
      <div class="pagination">
        <button @click="goToPage(Number(page) - 1)" :disabled="Number(page) <= 1">Previous</button>
        <button @click="goToPage(Number(page) + 1)" :disabled="products.length <= 2">Next</button>
      </div>
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
      loading: true,
    };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get("/api/products", {
          params: {
            page: this.page,
            limit: 3,
          },
        });
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.loading = false;
      }
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
  created() {
    this.fetchProducts();
  },
};
</script>

<style></style>
