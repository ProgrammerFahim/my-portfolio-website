import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "h08v31r0",
    dataset: "production",
    apiVersion: '2021-03-25', // use a UTC date string
    token: '', // or leave blank for unauthenticated usage
    useCdn: true // `false` if you want to ensure fresh data
});