export const product = {
  props: {
    id: Number,
    img_src: String,
    price: Number,
    like: Boolean,
  },
  template: `
    <div class="card" :key="id">
      <img :src="img_src" alt="">
      <div class="price">{{ price }} €</div>
      <div class="card-footer">
        <button class="btn btn-primary" @click="$emit('btnLiked', id)">
          <i class="fa-heart" :class="{ 'fa-solid': like, 'fa-regular': !like }"></i>
        </button>
        <button class="btn btn-secondary" @click="$emit('addToCart')">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  `,
};
