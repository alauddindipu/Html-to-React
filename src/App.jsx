import './App.css'

function App() {

  return (
    <>
     <header class="header secondary-bg">
        <nav>
            <h3 class="nav-title">Ma<span class="text-primary">r</span>y</h3>

            <ul>
                <li>Portfolio</li>
                <li>Blog</li>
                <li> <a href=""> <button class="btn-primary">Hire Me</button></a></li>
            </ul>
        </nav>
        <div class="banner">
            <div class="banner-content">
                <h4 class="banner-greetings">Hi, I am</h4>
                <h1 class="banner-title">Mary Hardy</h1>
                <p class="banner-description"> Shot what able cold new see hold.Friendly as an betrayed formerly he.
                    Morning
                    because as to society behaved moments.</p>
                <button class="btn-primary">Download CV</button>
                <button class="btn-primary"> <i class="bi bi-telephone-fill"></i> Contact</button>
            </div>

            <img class="banner-profile-pic" src="assets/images/hardy.png" alt="Profile Picture of Hard"/>
        </div>

    </header>

    <main>
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

        <section class="skills">
            <h3 class="section-tile text-center">What I Do</h3>
            <p class="section-description text-center">I have more than 10 years experience building software for
                clients all over
                the world. Below is a quick overview of my
                main technical skill sets and technologies i use. Want to find out more about my experience? Check out
                my online resume
                and project portfolio.</p>
            <div class="skills-container">
                <div class="skill">
                    <img src="assets/images/icons/js.png" alt=""/>
                    <h4 class="skill-title">Vanilla JavaScript</h4>
                    <p class="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div class="skill">
                    <img src="assets/images/icons/react.png" alt=""/>
                    <h4 class="skill-title">React</h4>
                    <p class="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div class="skill">
                    <img src="assets/images/icons/nodejs.png" alt=""/>
                    <h4 class="skill-title">Node JS</h4>
                    <p class="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div class="skill">
                    <img src="assets/images/icons/mongo.png" alt=""/>
                    <h4 class="skill-title">MongoDB</h4>
                    <p class="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
            </div>

        </section>

        <section class="resume">
            <h3 class="section-title text-center">A summary of My Resume</h3>
            <div class="resume-container">
                <div class="resume-column">
                    <h3>My Education</h3>
                    <div>
                        <h4>Master in Computer Engineering</h4>
                        <h5 class="experience-sub-title">Harvard University / 2015 - 2017</h5>
                        <p>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>

                    <hr/>

                    <h3>My Education</h3>
                    <div>
                        <h4>Master in Computer Engineering</h4>
                        <h5 class="experience-sub-title">Harvard University / 2015 - 2017</h5>
                        <p>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr />
                </div>
                <div class="resume-column">
                    <h3>My Experience</h3>
                    <div>
                        <h4>Sr. Frontend Developer</h4>
                        <h5 class="experience-sub-title">Apple Inc / 2020 - Current</h5>
                        <p>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr/>
                    <h3>My Experience</h3>
                    <div>
                        <h4>Sr. Frontend Developer</h4>
                        <h5 class="experience-sub-title">Apple Inc / 2020 - Current</h5>
                        <p>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="text-center resume-download-button">
                <button class="btn-primary"><i class="bi bi-download"></i> Download CV</button>
            </div>
        </section>
    </main>

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
     
    </>
  )
}

export default App
