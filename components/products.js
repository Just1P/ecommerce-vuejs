export const product = {
    props: {
        id: Number,
        img_src: String,
        price: Number,
        like: Boolean,
        number: Number,
        
    },
    template: `
        <div class="card" :key="id">
            <img :src="img_src" alt="" >
            <div class="price"> {{ price }} €</div>
            <div class="card-footer">
                <button> 
                    <i class="fa-regular fa-heart"></i>
                </button>
                <button>
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    `
}