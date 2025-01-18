export default { 
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
        name: 'orderItems',
        type: 'array',
        title: 'Order Items',
        of: [
            {
            type: 'object',
            fields: [
                {
                name: 'name',
                type: 'string',
                title: 'Name',
                },
                {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
                },
                {
                name: 'image',
                type: 'string',
                title: 'Image',
                },
                {
                name: 'price',
                type: 'number',
                title: 'Price',
                },
                {
                name: 'product',
                type: 'reference',
                to: [{type: 'product'}],
                },
            ],
            },
        ],
        },
        {
        name: 'shippingAddress',
        type: 'object',
        title: 'Shipping Address',
        fields: [
            {
            name: 'fullName',
            type: 'string',
            title: 'Full Name',
            },
            {
            name: 'address',
            type: 'string',
            title: 'Address',
            },
            {
            name: 'city',
            type: 'string',
            title: 'City',
            },
            {
            name: 'postalCode',
            type: 'string',
            title: 'Postal Code',
            },
            {
            name: 'country',
            type: 'string',
            title: 'Country',
            },
        ],
        }
    ]    
}