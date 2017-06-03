new Vue ({
    el : '#app',
    data : {
        total : 0,
        items : [
            { title: 'Item 1', price : 0.99 },
            { title: 'Item 2', price : 1.59 },
            { title: 'Item 3', price : 5.97 }
        ],
        cart : []
    },
    methods : {
        addItem : function(index){
            this.cart.push(this.items[index]);
            this.total += this.items[index].price;
        }
    }
});