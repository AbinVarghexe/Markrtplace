import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const Client = createClient({
    projectId: 'htkymbed',
    dataset: 'production',
    apiVersion: '2025-01-18',
    token: 'sk28DrqiE0TrWqDNWVLyEbSDIlhZKJmApfSPXnGkprwNtEE90Fr8ZjykXWSTQK0lPHEdgaQ6aYgimu3NqPxBPVezIiy9hohimhixOfg4qv4FBWI2jqZmUBQIxJkSRqX9ZtbmVGwxDK0qJYzYBsml7sqUjSmE5gx1xlcGaczifTTizbCIL65Y', // or leave blank for unauthenticated usage
    useCdn: true,
    });

const builder = imageUrlBuilder(Client)

export function urlFor(source: any) {
    return builder.image(source)
}
