import React from 'react';
import SectionHeading from './SectionHeading';
import Banner from './Banner';

const About = () => {
    const person = {
        intro: "Who am I?",
        interests: "Interests and Hobbies",
        hire: "Am I up for hire?"
    };

    return [
        <Banner>
            <span>Welcome to</span>A Page About Me!
        </Banner>,
        <SectionHeading title="All About Me"/>,
        <section className="bio">
            <h1>{person.intro}</h1>
            <p>Hmm, let's see. A 21-year old Mirpur resident trying to make it through this puzzling world
                of corporate greed. I was born while my parents stayed in Rampura, and no, I did not make 
                it through however many childhood years I spent there without getting robbed. If you have
                read up to this point, it will be no shocking revelation that I use humor as a defense 
                mechanism. An avid fan of the sitcom 'Friends', I never shy away from letting anyone know
                that if you can speak the language of the show, I will complete your sentences all the time.
            </p>
            <h1>{person.interests}</h1>
            <p>If you came here from the landing page, you know I'm an avid programmer. But this is not how
                I had intended my career to turn out. I was supposed to be a theoretical physicist (go on, make
                all the jokes about a poor future). However, when all my plans to go abroad failed, I settled for
                a degree in Computer Science. And I just fell in love with it... and I am still falling? LMAO. If 
                you think I am massively one-dimensional, I should let you know that I am also a history enthusiast
                (you could say almost specializing in World War 1 - I can draw those war frontier maps off the top
                of my head). I also like reading philosophy from time to time, and I love watching Carlsen get a
                run for his money (if you didn't get the reference, you probably don't play chess). 
            </p>
            <h1>{person.hire}</h1>
            <p>Yes! If you liked this portfolio webpage, you can contact me in any of the links below to hire
                me for any web-dev project you'd like. I'm also a (actually I am mainly a) software engineer, so any
                kind of backend focused work, or straigh up systems work will be fine as well. Thank you!
            </p>
        </section> 
    ];
};

export default About;