app.component('product-list', {
    props: {
        productsList: {
            type: Array,
            required: true,
        }
    },
    template:
        `
            <div class="product-list">
                <!--Title-->
                <div class="product-list__title margin-bottom-20px txt_center">
                    <h2>All product we have</h2>
                </div>
                    
                <!--Product List-->
                <div class="product-list__inner">
                    <div v-if="productsList.length === 0" class="txt_center">
                    <h3>No Item Found</h3>
                </div>
                    <ul v-else>
                        <li v-for="product in productsList">
                            <div class="product-list__item fl-center-v" @click="addProductChoose(product.id)">
                                <div class="product-image image-cover" :class="{'choose': product.isChoose}">
                                    <img :src="product.image" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-info__inner margin-bottom-20px">
                                        <h3>{{ product.name }}</h3>
                                        <p><strong>ID:</strong> {{ product.id }}</p>
                                        <p><strong>Price:</strong> {{ product.price }}$</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
        `,
    data(){
        return {}
    },
    methods: {
        addProductChoose(id) {
            this.$emit("product-choose-add", id);
        }
    }
})