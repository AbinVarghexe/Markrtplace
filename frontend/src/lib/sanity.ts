import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const Client = createClient({
    projectId: 'htkymbed',
    dataset: 'production',
    apiVersion: '2025-01-18',
    useCdn: true,
    });

const builder = imageUrlBuilder(Client)

export function urlFor(source: any) {
    return builder.image(source)
}
