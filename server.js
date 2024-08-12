let PRODUCTS = require('./products/products.model');
let ORDERS = require('./orders/orders.model');

let { makeExecutableSchema } = require("@graphql-tools/schema")
let { loadFilesSync } = require("@graphql-tools/load-files")
let { graphqlHTTP }= require("express-graphql")
let express = require("express")
let path = require("path");
let app = express();
let PORT = 3400;

let typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"), {
    extensions: ['graphql']
});
let resolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

//console.log(typesArray);

let schema = makeExecutableSchema({
    typeDefs: typesArray, 
    resolvers: resolverArray
})

const root = {
    products: PRODUCTS ,
    orders: ORDERS
}
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true
}))

app.listen(PORT, () => {
    console.log(`running a graphQl server on port 3500 \n 👉  http://localhost:${PORT}/graphql?`)
});