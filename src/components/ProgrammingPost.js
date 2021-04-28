import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import Banner from './Banner';

const ProgrammingPost = () => {
    const [progPost, setprogPost] = useState(null);
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
        }`).then((data) => setprogPost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (progPost == null) {
        return [
           <Banner hide="hide"></Banner>,
           <h1>Loading...</h1>
        ];
    }
    
    return [
        <Banner hide="hide"></Banner>,
        <article className="post">
            <img src={progPost.mainImage.asset.url} alt={progPost.title} />
            <h1>{progPost.title}</h1>
            <h2>{progPost.subtitle}</h2>
            <div className="main-content">
                <BlockContent 
                    blocks={progPost.body} 
                    projectId="h08v31r0" 
                    dataset="production"/>
            </div>
        </article>
    ];
};

export default ProgrammingPost;