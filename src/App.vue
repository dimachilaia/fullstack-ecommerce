<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, provide, onMounted } from 'vue';
import NavBar from "./components/NavBar.vue";
import { fetchCartItems } from './store/Cart';

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const cartItemsCount = reactive({ count: 0 });
    provide('cartItemsCount', cartItemsCount);

    onMounted(async () => {
      const userId = '12345';
      const cartItems = await fetchCartItems(userId);
      cartItemsCount.count = cartItems.length;
    });

    return {
      cartItemsCount
    };
  },
};
</script>

<style>
</style>
