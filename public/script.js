new Vue ({
    el : '#app',
    data : {
        total : 0,
        items : [
            { id:1, title: 'Item 1', price : 0.99 },
            { id:2, title: 'Item 2', price : 1.59 },
            { id:3, title: 'Item 3', price : 5.97 }
        ],
        cart : []
    },
    methods : {
        addItem : function(index){
            var position = this.cart.map(function(elem) { return elem.id; }).indexOf(this.items[index].id);
            var newItem = {};

            if(position > -1) {
                this.cart[position].qty++;
            } else {
                newItem = {
                    id: this.items[index].id,
                    title: this.items[index].title,
                    price: this.items[index].price,
                    qty: 1
                }
                this.cart.push(newItem);
            }

            this.total += this.items[index].price;
        }
    }
});