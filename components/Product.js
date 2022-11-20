app.component('product-section', {
    template:
        `
        <section class="product">
            <!--Search-->
            <product-form @search-string="updateSearchString"></product-form>

            <div class="product-display d-flex">
                <!--Product List-->
                <product-list 
                    :productsList="findProductsSearch"
                    @product-choose-add="productsChooseAdd">
                </product-list>
                
                <!--Product Choose-->
                <product-choose 
                    :productsChoose="productsChoose"
                    @product-choose-increase="productChooseIncrease"
                    @product-choose-decrease="productChooseDecrease"
                    @product-choose-remove="productChooseRemove">
                </product-choose>
            </div>
            
        </section>
        `,
    data(){
        return {
            products: [
                {
                    id: "DI12",
                    name: "Natural Diamond with standard cut",
                    image: 'assets/images/diamond.jpg',
                    weight: 1.2,
                    price: 12000
                },
                {
                    id: "RU3",
                    name: "Natural Ruby with standard cut and dark red color",
                    image: 'assets/images/ruby.jpg',
                    weight: 3,
                    price: 8000
                },
                {
                    id: "SA32",
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
                    id: "AQ25",
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
                    id: "OP2",
                    name: "Natural colorful Opal with many colors",
                    image: 'assets/images/opal.jpg',
                    weight: 2,
                    price: 400
                },
                {
                    id: "QU20",
                    name: "Natural Quartz with colorful gemstone",
                    image: 'assets/images/quartz.jpg',
                    weight: 20,
                    price: 1000
                },
                {
                    id: "SP42",
                    name: "Natural Spinel from Luc Yen, Vietnam",
                    image: 'assets/images/spinel.jpg',
                    weight: 4.2,
                    price: 4000
                },
                {
                    id: "TO32",
                    name: "Natural Topaz with VVS Clarity",
                    image: 'assets/images/topaz.jpg',
                    weight: 3.2,
                    price: 200
                },
                {
                    id: "TO100",
                    name: "Natural Tricolor Tourmaline with many shape",
                    image: 'assets/images/spinel.jpg',
                    weight: 100,
                    price: 4000
                },
            ],
            textSearch: '',
            productsChoose: [],
        }
    },
    methods: {
        addIsChooseForProduct(){
            this.products.filter((item, index) => {
                item.isChoose = false;
            });
        },
        updateSearchString(string){
            this.textSearch = string;
        },
        findIndexBaseOnId(id, array){
            return array.findIndex(item => item.id === id);
        },
        removeProductsChoose(id) {
            this.products[this.findIndexBaseOnId(id, this.products)].isChoose = false;
        },
        productsChooseAdd(id){
            // return if products is chosen
            if (this.products[this.findIndexBaseOnId(id, this.products)].isChoose) return;

            // push product with id to product choose
            this.productsChoose.push(this.products[this.findIndexBaseOnId(id, this.products)]);

            // update number product choose
            this.productsChoose[this.findIndexBaseOnId(id, this.productsChoose)].number = 1;

            // update status of products
            this.products[this.findIndexBaseOnId(id, this.products)].isChoose = true;
        },
        productChooseIncrease(id) {
            this.productsChoose[this.findIndexBaseOnId(id, this.productsChoose)].number++;
        },
        productChooseDecrease(id) {
            if (this.productsChoose[this.findIndexBaseOnId(id, this.productsChoose)].number > 0) {
                this.productsChoose[this.findIndexBaseOnId(id, this.productsChoose)].number--;
            }
        },
        productChooseRemove(id) {
            const indexProducts = this.findIndexBaseOnId(id, this.products),
                indexProductsChoose = this.findIndexBaseOnId(id, this.productsChoose);

            // remove product with id
            this.productsChoose = this.productsChoose.slice(0, indexProductsChoose).concat(this.productsChoose.slice(indexProductsChoose + 1, this.productsChoose.length));

            // update status choose of product
            this.products[indexProducts].isChoose = false;
        },
    },
    beforeMount(){
        this.addIsChooseForProduct();
    },
    computed: {
        findProductsSearch(){
            const result = [];
            if(this.textSearch === '') return this.products;

            const standardStr = this.textSearch.trim().toLowerCase();

            this.products.forEach(item => {
                if(item.name.toLowerCase().indexOf(standardStr) !== -1){
                    result.push(item);
                }
            });
            return result;
        },
    }
});