<template>
    <div>
    </div>
</template>

<script>
import { products } from "@/temp-data";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find((product) => product.id === this.$route.params.productId),
    };
  },
};
</script>
