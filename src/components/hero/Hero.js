import React from 'react';
import { HERO } from '../../static';
import { HERO__BOTTOM } from '../../static';
import "./Hero.css"
const heroAbout = HERO.map((el) =>
    <div className='hero' key={el.id}>
        <div style={{
            backgroundImage: `url(${el.images})`,
            height: "600px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: "20px"
        }} className={"hero__top" + el.id}>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <a href="#">{el.learnMore}</a>
            <a href="#">{el.buy}</a>
        </div>
    </div>
)

const hero__boottom = HERO__BOTTOM.map((el) =>
    <div key={el.id} className={"hero__bottom__title" + el.id}>
        <div style={{
            textAlign: "center",
            width: "100%",
            height: "500px",
            backgroundImage: `url(${el.images})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "45px",
        }}
            className={el.className + el.id}>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <a href="#">{el.learnMore}</a>
            <a href="#">{el.buy}</a>
        </div>
    </div>
)


function Hero() {
    return (
        <div>
            <div>
                {heroAbout}
            </div>
            <div className='hero__bottom'>
                {hero__boottom}
            </div>

        </div>
    )
}

export default Hero