var products = {
    getName: function (order_type) {
        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];
            if (item.order_type == order_type) {
                return item.value;
            }
        }
    },
    products: [
        {
            key: "aki", value: '安康个人重疾', order_type: 501
        },
        {
            key: "akg", value: '安康团体重疾', order_type: 502
        }
    ]
};
module.exports = products;