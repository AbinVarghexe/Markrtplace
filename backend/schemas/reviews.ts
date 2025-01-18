export default {
    name: 'review',
    type: 'document',
    title: 'Review',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
        },
        {
            name: 'comment',
            type: 'text',
            title: 'Comment',
        },
    ],
}