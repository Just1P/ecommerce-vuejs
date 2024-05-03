const { createApp, ref } = Vue;
import { cart } from "./components/cart.js";
import { navigation } from "./components/navigation.js";
import { product } from "./components/products.js";
const vm = createApp({
  components: {
    cards: product,
    navbar: navigation,
    shop: cart,
  },
  data() {
    return {
      productList: [],
      isActive: false,
    };
  },
  methods: {
    btnLiked(id) {
      this.productList[id].like = !this.productList[id].like;
    },
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.productList = data;
      });
  },
}).mount("#app");
