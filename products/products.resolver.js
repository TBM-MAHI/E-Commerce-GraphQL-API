let productsModel = require("./products.model");

module.exports = {
    Query: { 
        products: () => {
            console.log("retrieving products resolvers");

            return productsModel.getAllProducts();
        },
        productsByPrice: (parent,args) => {
            return productsModel.get_productsByPrice(args.min, args.max);
        },
        productById: (parent,args) => {
            return productsModel.get_product_by_Id(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.id, args.description, args.price);
        }
    }
}