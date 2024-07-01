let products = [
    {
        id: '1',
        description: 'Red Poncho',
        price: 19.99,
        reviews: [ ]

    },
    {
        id: '2',
        description: 'BLUE HAT',
        price: 29.99,
        reviews: []

    },
    {
        id: '3',
        description: 'Embroidery jumpsuit',
        price: 59.99,
        reviews: []
    }
]


function getAllProducts() {
    return products;
}

function get_productsByPrice(min, max) {
    return products.filter(
        prod => prod.price <= max && prod.price >= min
    )
}

function addNewProduct(id, des, pr) {
    let newProd = {
        id,
        description: des,
        price: pr,
        reviews: []
    }
    products = [ ...products, newProd ]
    return newProd;
}

function get_product_by_Id(id) {
    return products.find(
        prod => prod.id == id
    )
}

function get_product_by_Id(id) {
    return products.find(
        prod => prod.id == id
    )
}

module.exports = {
    getAllProducts,
    get_productsByPrice,
    get_product_by_Id,
    addNewProduct
}