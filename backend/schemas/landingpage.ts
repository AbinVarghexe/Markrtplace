export default{
    name: 'LandingPage',
    type: 'document',
    title: 'Landing Page',

    fields: [{
        name: 'title',
        type: 'string',
        title: 'Title',
    },
    {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
    },
    {
        name: 'description',
        type: 'text',
        title: 'Description',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image',
        of: [{ type: 'image' }],
    },
    {
        name: 'cta',
        type: 'string',
        title: 'Call to Action',
    },
    {
        name: 'ctaLink',
        type: 'string',
        title: 'Call to Action Link',
    }]
}