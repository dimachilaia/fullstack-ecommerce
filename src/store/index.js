import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    cartItemsCount: (state) => state.cartItems.length,
  },
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(productId) {
      const index = this.cartItems.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
  },
});
