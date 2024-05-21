const { createApp } = Vue;
import { cart } from "./components/cart.js";
import { product } from "./components/products.js";

const vm = createApp({
  components: {
    cards: product,
    cart: cart,
  },
  data() {
    return {
      productList: [],
      cartList: [],
    };
  },
  computed: {
    AnyProductLiked() {
      return this.productList.some((product) => product.like);
    },
    totalPrice() {
      return this.cartList.reduce(
        (sum, item) => sum + item.price * item.number,
        0
      );
    },
  },
  methods: {
    handleLike(id) {
      const product = this.productList.find((product) => product.id === id);
      if (product) {
        product.like = !product.like;
      }
    },
    addToCart(product) {
      const cartItem = this.cartList.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.number += 1;
      } else {
        this.cartList.push({ ...product, quantity: 1, number: 1 }); // Je n'arrive pas à afficher le number...
      }
    },
    removeFromCart(id) {
      const cartItem = this.cartList.find((item) => item.id === id);
      if (cartItem) {
        cartItem.number -= 1;
        if (cartItem.number <= 0) {
          this.cartList = this.cartList.filter((item) => item.id !== id);
        }
      }
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
