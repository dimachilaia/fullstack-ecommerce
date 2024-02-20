<template>
  <div>
    <div class="cart-item" v-for="item in CartItems" :key="item?.id">
      <img class="cart-item-image" :src="item?.imageName" />
      <p class="cart-item-name">{{ item?.name }}</p>
      <p class="cart-item-price">{{ item?.price }}</p>
      <button @click="$emit('remove-from-cart', item.id)" class="cart-remove-button">Remove from Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartsList",
  props: ["CartItems"],
};
</script>
