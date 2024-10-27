import React from 'react';

const About = () => {
    return (
        <div>
            <section class="about secondary-bg">
            <h3 class="section-tile text-center">About Me</h3>
            <p class="section-description text-center">
                I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
                websites that
                provide real value to the end user. Thousands of clients have procured exceptional resulfs while working
                with me.
                Delivering work within time and budget which meets clients requirements in our mata.
            </p>

            <div class="about-items">
                <div class="about-item">
                    <p class="item-title">Name:</p>
                    <p class="item-description">Mary Hardy</p>
                </div>
                <div class="about-item">
                    <p class="item-title">Email:</p>
                    <p class="item-description">info@gmail.com</p>
                </div>
                <div class="about-item">
                    <p class="item-title">Date of birth:</p>
                    <p class="item-description">11 November 1987</p>
                </div>
                <div class="about-item">
                    <p class="item-title">From:</p>
                    <p class="item-description">Los Angeles, USA</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default About;
