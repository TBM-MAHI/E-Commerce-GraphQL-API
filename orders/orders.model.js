let orders = [
    {
        id: "1",
        date: "08-12-2023",
        subtotal: 95.32,
        items: [
            {
                product: {
                    id: '1',
                    description: 'Old Red Poncho',
                    price: 9.79,

                },
                quantity: 2
            }
        ]
    }
]

function getAllOrders() {
    /* AS LONG AS THIS FUNCTION RETURNS A FORMATTED ARRAY
 THE DATABASE QUESY CAN BE SQL OR WHATEVER
*/
    return orders;
}

module.exports = {
    getAllOrders
}
