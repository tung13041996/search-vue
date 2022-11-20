app.component('product-choose', {
    props: {
        productsChoose: {
            type: Array,
            required: true,
        }
    },
    template:
        `
            <div class="product-choose">
                <!--Product Choose Title-->
                <div class="product-choose__title margin-bottom-20px txt_center">
                    <h2>Product chosen</h2>
                </div>    
                
                <!--Product Choose > List item choose -->
                <div class="product-choose__inner margin-bottom-20px">
                    <div v-if="productsChoose.length === 0" class="txt_center">
                        <h3>No Item Choose</h3>
                    </div>
                    <ul v-else>
                        <li class="fl-center-v" v-for="product in productsChoose">
                            <div class="product-image image-cover">
                                <img :src="product.image" alt="">
                            </div>
                            <div class="product-info">
                                <div class="product-info__inner margin-bottom-10px">
                                    <h3>{{ product.name }}</h3>
                                    <p>Price: {{ product.price }}$</p>
                                    <p>Number: {{ product.number }}</p>
                                </div>
                                <div class="product-info__button-group fl-center-v">
                                    <button @click="decreaseProductChoose(product.id)"
                                            :class="{'disabled' : product.number===0}">- 
                                    </button>
                                    <button @click="increaseProductChoose(product.id)">+</button>
                                    <button @click="removeProductChoose(product.id)">Remove</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!--Product Choose > Bill-->
                <div class="product-choose__total" v-if="productsChoose.length > 0">
                    <div class="product-choose__total-title txt_center">
                        <h4>Bill detail</h4>
                    </div>
                    <div class="product-choose__total-detail">
                        <div class="product-choose__total-label fl-center-v">
                            <div class="product-choose__total-label-id">ID</div>
                            <div class="product-choose__total-label-price">Price</div>
                            <div class="product-choose__total-label-number">Number</div>
                            <div class="product-choose__total-label-total">Total</div>
                        </div>
                        <ul>
                            <li class="fl-center-v" v-for="product in productsChoose">
                                <div class="product-choose__total-id">{{ product.id }}</div>
                                <div class="product-choose__total-price">{{ product.price }}$</div>
                                <div class="product-choose__total-number">{{ product.number }}</div>
                                <div class="product-choose__total-sum">{{ product.price * product.number }}</div>
                            </li>
                        </ul>
                        <div class="product-choose__total-bill fl-center-v">
                            <div class="product-choose__total-bill-label">Total Bill</div>
                            <div class="product-choose__total-bill-money">{{ productBill }}</div>
                        </div>
                    </div>
                </div>
                </div>
        `,
    data(){
        return {}
    },
    methods: {
        increaseProductChoose(id){
            this.$emit('product-choose-increase', id);
        },
        decreaseProductChoose(id){
            this.$emit('product-choose-decrease', id);
        },
        removeProductChoose(id){
            this.$emit('product-choose-remove', id);
        },
    }
})