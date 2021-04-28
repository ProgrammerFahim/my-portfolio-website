import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";
import SectionHeading from './SectionHeading';
import Banner from './Banner';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
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
        .then((data) => setBlogs(data))
        .catch(console.error);
    }, []);

    

    return [
        <Banner>
            <span>Welcome to</span>The Blog Page
        </Banner>,
        <SectionHeading title="Blog Posts"/>,
        <section className="all-posts">
            {blogs && blogs.map((post) => (
                <figure class="blog-entry">
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                    <figcaption>
                        <div class="entry-desc">
                            <h2>{post.title}</h2>
                            <p>{post.subtitle}</p>
                        </div>
                        <Link to={"/blog/" + post.slug.current} key={post.slug.current}>Read Article</Link>
                    </figcaption>	
                </figure>
            ))}
        </section> 
    ];
};

export default Blog;