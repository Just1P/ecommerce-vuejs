export const cart = {
  props: {
    id: Number,
    img_src: String,
    price: Number,
    name: String,
    number: Number,
  },
  template: `
    <div class="cart-container" :key="id">
      <div class="img-container">
        <img :src="img_src" alt="" class="cart-img" >
      </div>
      <div class="content">
        <div class="cart-title"><p class="product-name">{{ name }}</p></div>
        <div class="cart-price">{{ price }} € x {{ number }}</div>
      </div>
      <button class="trash" @click="$emit('removeOnCart', id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `,
};
