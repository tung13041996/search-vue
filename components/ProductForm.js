app.component('product-form', {
    template:
        `
        <div class="product-search margin-bottom-80px">
            <form class="ps-relative">
                <label>
                    <input type="text"
                           placeholder="Search Product"
                           v-model="inputStr"
                           @input="filterString">
                          
                </label>
            </form>
        </div>
        `,
    data(){
        return {
            inputStr: '',
        }
    },
    methods: {
        filterString(){
            this.$emit('search-string', this.inputStr);
        },
    }

})