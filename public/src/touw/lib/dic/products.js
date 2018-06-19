var products = {
    getName: function (order_type) {
        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];

            if (item.key === order_type) {
                return item.value;
            }
        }
    },
    products: [
        {
            key: "ipmi", value: '', order_type: '401'
        },
        {
            key: "aki", value: '', order_type: '501'
        }
    ]
};
module.exports = products;