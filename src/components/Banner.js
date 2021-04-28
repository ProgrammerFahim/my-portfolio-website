import React from 'react';
import NavPad from './NavPad';
import logo from '../assets/portfolio-logo.png';

const banner = (props) => {

    let passClass = '';
    if(props.hide == 'hide')
        passClass += 'hide';

    let imgClass = '';
    if(props.hide == 'hide')
        imgClass += 'mdrop';

    console.log(passClass + ' is the class');

    return (
        <div className="banner">
            <NavPad />
            <section className={"section-intro " + imgClass}>
                <img src={logo} alt="Logo" />
                <h1 className={passClass}>{props.children}</h1>
            </section>
        </div>
    );
}

export default banner;