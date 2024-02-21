<template>
  <div v-if="product" class="product-detail-container">
    <img :src="product.imageName" class="product-detail-image" />
    <h1 class="product-detail-name">{{ product.name }}</h1>
    <h3 class="product-detail-price">{{ product.price }}</h3>
    <button @click="addToCart" class="product-detail-button" v-if="!itemIsInCart && !alreadyInCart">Add to Cart</button>
    <button v-else disabled class="product-detail-button">This Item is in Your Cart</button>
  </div>
  <div v-else>
    <p class="product-not-found">Product not found.</p>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastify";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
      cartItems: [],
      toast: null,
      alreadyInCart: false,
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some((item) => item.id === this.$route.params.productId);
    },
  },
  methods: {
    addToCart() {
      const toast = useToast({position:'top-right'});
      axios
        .post("/api/users/12345/cart", {
          id: this.$route.params.productId,
        })
        .then(() => {
          this.alreadyInCart = true;
          toast.success("Item added successfully");
        })
        .catch(() => {});
    },
    computed: {
      itemIsInCart() {
        return this.alreadyInCart || this.cartItems.some((item) => item.id === this.$route.params.productId);
      },
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
