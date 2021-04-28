import React from 'react';
import { Link } from 'react-router-dom';
import NavPad from './NavPad';
import logo from '../assets/portfolio-logo.png';
import face from '../assets/cartoon.jpg';
import justice from '../assets/justice.jpg';
import program from '../assets/programming.jpg';

const home = () => {
    return (
        <div className="home">
            <div className="banner">
                <NavPad />
                <section className="intro">
                    <img src={logo} alt="Logo" />
                    <h1><span>Hi,</span>I'm Fahim Faisal<span>Welcome to my Portfolio!</span></h1>
                </section>
            </div>
            <section className="about-me">
                <h1>So, who is Fahim?</h1>
                <img src={face} alt="Author" />
                <p>I am an avid programmer, currently focused on Systems
                    Programming, specifically in the Linux environment. I
                    am also a wannabe historian, economist, litterateur, and
                    web designer (the kind that makes portfolios like this,
                    not the spider stuff). I would list a few more things,
                    but at this point, it is probably in everyone's best
                    interests to think of me as a very curious soul. And I
                    would like to take you with me down this wonderful path
                    of the curiosity lifestyle!</p>
                <Link className="btn" to="/about">More about me</Link>
            </section>

            <section className="blog-ad">
                <h1>Blog</h1>
                <p>The blog is my space to share my thoughts on current
                    events, to share interesting tidbits of information
                    I collect from my day-to-day excursions, and my 
                    overarching way of documenting my journey through life.</p>
                <figure className="blog-entry">
                    <img src={justice} alt="Article Cover" />
                    <figcaption>
                        <div className="entry-desc">
                            <h2>Consequentialist vs Categorical</h2>
                            <p>Are these moral reasoning strategies always
                                mutually exclusive?</p>
                        </div>
                        <Link to="/blog/consequentialist-vs-categorical">Read Article</Link>
                    </figcaption>	
                </figure>			
                <Link className="btn" to="/blog">Check my blog!</Link>
            </section>

            <section className="programming-ad">
                <h1>Programming</h1>
                <p>On this section, I publish detailed articles on all things
                    programming, from something as low level as systems 
                    programming, all the way up to data science. Keep an eye
                    on this, might have something for most programmers!</p>
                <figure className="programming-entry">
                    <img src={program} alt="Article Cover" />
                    <figcaption>
                        <div className="entry-desc">
                            <h2>The <span>exec</span> functions</h2>
                            <p>A primer on the various forms of the <em>exec</em>
                            family of functions, and when to use each of them.</p>
                        </div>
                        <Link to="/programming/dup-function-calls">Read Article</Link>
                    </figcaption>	
                </figure>
                <Link className="btn" to="/programming">Check out the programming section!</Link>	
            </section>

            <section className="quote">
                <div className="quote-container">
                    <blockquote>If you do not have what it takes to use the
                            resources you <span>do</span> have, how can you
                            be sure you'll be able to use the resources you 
                            <span> think</span> you need when you actually 
                            have them?
                    </blockquote>
                    <p>Fahim Faisal</p>
                </div>
            </section>
        </div>
    );
};

export default home;