export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'image',
            type: 'array',
            title: 'Product-Image',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
              },
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of the product',
        },
        {
            name: 'category',
            type: 'reference',
            title: 'category',
            to: [{ type: 'category' }],
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
    ],
}