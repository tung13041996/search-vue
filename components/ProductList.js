app.component('product-list', {
    template:
    `<div class="product-list">
                <ul>
                    <li class="fl-center-v" v-for="product in products">
                        <div class="product-image image-cover">
                            <img :src="product.image" alt="">
                        </div>
                        <div class="product-info">
                            <div class="product-info__inner margin-bottom-20px">
                                <h3>{{ product.name }}</h3>
                                <p>Weight: {{ product.weight }}cts</p>
                                <p>Price: {{ product.price }}$</p>
                            </div>
                            <div class="product-info__button-group fl-center-v">
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    `,
    data() {
        return {
            products: [
                {
                    name: "Natural Diamond with standard cut",
                    image: 'assets/images/diamond.jpg',
                    weight: 1.2,
                    price: 12000
                },
                {
                    name: "Natural Ruby with standard cut and dark red color",
                    image: 'assets/images/ruby.jpg',
                    weight: 3,
                    price: 8000
                },
                {
                    name: "Natural Royal Sapphire with brilliant cut VVS",
                    image: 'assets/images/sapphire.jpg',
                    weight: 3.2,
                    price: 15000
                },
                {
                    name: "Natural Emerald with standard cut",
                    image: 'assets/images/emerald.jpg',
                    weight: 2.4,
                    price: 10000
                },
                {
                    name: "Big Natural Aquamarine with VVS Clarity",
                    image: 'assets/images/aquamarine.jpg',
                    weight: 25,
                    price: 20000
                },
                {
                    name: "2 pieces Natural Garnet with facet cut",
                    image: 'assets/images/garnet.jpg',
                    weight: 6,
                    price: 2000
                },
                {
                    name: "Natural colorful Opal with many colors",
                    image: 'assets/images/opal.jpg',
                    weight: 2,
                    price: 400
                },
                {
                    name: "Natural Quartz with colorful gemstone",
                    image: 'assets/images/quartz.jpg',
                    weight: 20,
                    price: 1000
                },
                {
                    name: "Natural Spinel from Luc Yen, Vietnam",
                    image: 'assets/images/spinel.jpg',
                    weight: 4.2,
                    price: 4000
                },
                {
                    name: "Natural Topaz with VVS Clarity",
                    image: 'assets/images/topaz.jpg',
                    weight: 3.2,
                    price: 200
                },
                {
                    name: "Natural Tricolor Tourmaline with many shape",
                    image: 'assets/images/spinel.jpg',
                    weight: 100,
                    price: 4000
                },
            ]
        }
    }
})