import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import Banner from './Banner';

const BlogPost = () => {
    const [blogPost, setblogPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            subtitle,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name
        }`).then((data) => setblogPost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (blogPost == null) {
        return [
           <Banner hide="hide"></Banner>,
           <h1>Loading...</h1>
        ];
    }
    
    return [
        <Banner hide="hide"></Banner>,
        <article className="post">
            <img src={blogPost.mainImage.asset.url} alt={blogPost.title} />
            <h1>{blogPost.title}</h1>
            <h2>{blogPost.subtitle}</h2>
            <div className="main-content">
                <BlockContent 
                    blocks={blogPost.body} 
                    projectId="h08v31r0" 
                    dataset="production"/>
            </div>
        </article>
    ];
};

export default BlogPost;