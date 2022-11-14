const app = Vue.createApp({
    data(){
        return {
            products: [
                {
                    id:"DI12",
                    name: "Natural Diamond with standard cut",
                    image: 'assets/images/diamond.jpg',
                    weight: 1.2,
                    price: 12000
                },
                {
                    id:"RU3",
                    name: "Natural Ruby with standard cut and dark red color",
                    image: 'assets/images/ruby.jpg',
                    weight: 3,
                    price: 8000
                },
                {
                    id:"SA32",
                    name: "Natural Royal Sapphire with brilliant cut VVS",
                    image: 'assets/images/sapphire.jpg',
                    weight: 3.2,
                    price: 15000
                },
                {
                    id: "EM24",
                    name: "Natural Emerald with standard cut",
                    image: 'assets/images/emerald.jpg',
                    weight: 2.4,
                    price: 10000
                },
                {
                    id:"AQ25",
                    name: "Big Natural Aquamarine with VVS Clarity",
                    image: 'assets/images/aquamarine.jpg',
                    weight: 25,
                    price: 20000
                },
                {
                    id: "GA60",
                    name: "2 pieces Natural Garnet with facet cut",
                    image: 'assets/images/garnet.jpg',
                    weight: 6,
                    price: 2000
                },
                {
                    id:"OP2",
                    name: "Natural colorful Opal with many colors",
                    image: 'assets/images/opal.jpg',
                    weight: 2,
                    price: 400
                },
                {
                    id:"QU20",
                    name: "Natural Quartz with colorful gemstone",
                    image: 'assets/images/quartz.jpg',
                    weight: 20,
                    price: 1000
                },
                {
                    id:"SP42",
                    name: "Natural Spinel from Luc Yen, Vietnam",
                    image: 'assets/images/spinel.jpg',
                    weight: 4.2,
                    price: 4000
                },
                {
                    id:"TO32",
                    name: "Natural Topaz with VVS Clarity",
                    image: 'assets/images/topaz.jpg',
                    weight: 3.2,
                    price: 200
                },
                {
                    id:"TO100",
                    name: "Natural Tricolor Tourmaline with many shape",
                    image: 'assets/images/spinel.jpg',
                    weight: 100,
                    price: 4000
                },
            ],
            inputStr: '',
            productsChoose: [],
        }
    },
    methods: {
        filterString(){
            return this.inputStr;
        },
        addIsChooseForProduct() {
            this.products.filter((item, index) => {
                item.isChoose = false;
            });
        },
        findIndexBaseOnId(id, array) {
            return array.findIndex(item => item.id === id);
        },
        addProductChoose(id){
            const indexProducts = this.findIndexBaseOnId(id, this.products),
                length = this.productsChoose.length;

            if (!this.products[indexProducts].isChoose) {
                this.productsChoose.push(this.products[indexProducts]);
                this.productsChoose[length].number = 1;
                this.products[indexProducts].isChoose = true;
            }
        },
        increaseProductChoose(id){
            this.productsChoose[this.findIndexBaseOnId(id, this.productsChoose)].number++;
        },
        decreaseProductChoose(id){
            const indexProductsChoose = this.findIndexBaseOnId(id, this.productsChoose);

            if (this.productsChoose[indexProductsChoose].number > 0) {
                this.productsChoose[indexProductsChoose].number--;
            }
        },
        removeProductChoose(id){
            const indexProducts = this.findIndexBaseOnId(id, this.products),
                indexProductsChoose = this.findIndexBaseOnId(id, this.productsChoose);

            this.productsChoose = this.productsChoose.slice(0, indexProductsChoose).concat(this.productsChoose.slice(indexProductsChoose + 1, this.productsChoose.length));
            this.products[indexProducts].isChoose = false;
        },
    },

    beforeMount(){
        this.addIsChooseForProduct();
    },
    computed: {
        addProduct(){
            const result = [];
            if(this.inputStr === '') return this.products;

            const standardStr = this.inputStr.trim().toLowerCase();

            this.products.forEach(item => {
                if(item.name.toLowerCase().indexOf(standardStr) !== -1){
                    result.push(item);
                }
            });
            return result;
        },
        productBill() {
            let total = 0;
            for(let i=0; i<this.productsChoose.length; i++) {
                total += this.productsChoose[i].price * this.productsChoose[i].number;
            }
            return total;
        }
    }
})