import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createRouter, createWebHistory } from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetail.vue";
import CheckoutPage from "./components/Checkout.vue";
import "vue-toastify/index.css";
import VueToastify from 'vue-toastify';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/cart",
      component: ShoppingCartPage,
    },
    {
      path: "/products",
      component: ProductsPage,
    },
    {
      path: "/products/:productId",
      component: ProductDetailPage,
    },
    {
      path: "/checkout",
      component: CheckoutPage,
    },
    {
      path: "/products",
      component: ProductsPage,
      props: (route) => ({ page: route.query.page }),
    },
  ],
});


createApp(App).use(router).use(VueToastify).mount("#app");
