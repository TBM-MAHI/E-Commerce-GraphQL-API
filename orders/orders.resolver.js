let ordersModel = require("./orders.model");

module.exports = {
    Query: {
        orders: () => {
            console.log("retrieving orders resolvers");

            return ordersModel.getAllOrders();
        }
    }
}