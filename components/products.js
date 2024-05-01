export const product = {
    props: {
        id: Number,
        imgSrc: String,
        price: Number,
        like: Boolean,
        number: Number,
        
    },
    template: `
        <div class="card" :key="id">
            <img :src="imgSrc" alt="" />
            <div class="price"> {{ price }} €</div>
            <div class="card-footer">
                <button v-on:click="like"> 
                    <font-awesome-icon :icon="['far', 'heart']" />
                </button>
                <button v-on:click="increase(number)">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                </button>
            </div>
        </div>
    `
}