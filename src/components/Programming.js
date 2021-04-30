import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";
import SectionHeading from './SectionHeading';
import Banner from './Banner';

const Programming = () => {
    const [progs, setProgs] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "programming"]{
            title,
            subtitle,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setProgs(data))
        .catch(console.error);
    }, []);

    

    return [
        <Banner>
            <span>Welcome to</span>The Programming Page
        </Banner>,
        <SectionHeading title="Articles"/>,
        <section className="all-posts">
            {progs && progs.map((post) => (
                <figure className="blog-entry">
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                    <figcaption>
                        <div className="entry-desc">
                            <h2>{post.title}</h2>
                            <p>{post.subtitle}</p>
                        </div>
                        <Link to={"/programming/" + post.slug.current} key={post.slug.current}>Read Article</Link>
                    </figcaption>	
                </figure>
            ))}
        </section> 
    ];
};

export default Programming;