import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="secondary-bg">
        <div class="footer-column">
            <h3 class="section-title">Lets Connect</h3>
            <p class="section-description">Please fill out the form on this section to contact with me or call between
                9:00 A.M and 8.00 P.M ET,
                Monday through
                Friday.</p>
            <div>
                <a href=""><img src="assets/images/icons/facebook.png" alt=""/></a>
                <a href=""><img src="assets/images/icons/twitter.png" alt=""/></a>
                <a href=""><img src="assets/images/icons/insta.png" alt=""/></a>
            </div>
        </div>
        <div class="footer-column">
            <h3 class="section-title">Let's Message Me</h3>
            <form action="">
                <input type="text" placeholder="Your name"/>
                <input type="email" name="" id="" placeholder="Your Email"/>
                <textarea name="" id="" cols="30" rows="20" placeholder="Message"></textarea>
                <input class="btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
    </footer>
        </div>
    );
}

export default Footer;
