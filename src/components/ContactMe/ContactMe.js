import './ContactMe.css';

function ContactMe() {
    return (
        <section id="contact-me-summary">
            <div className="heading">Contact Me</div>

            <div className="scroll name-section">
                <p className="widthh">
                    Feel free to contact me by below mentioned routes
                </p>
            </div>

            <div className="social">
                <a href="https://github.com/vishnusr90/">
                    <img src="github-new.png"alt="Github" />
                </a>

                <a href="https://www.linkedin.com/in/vishnusr90">
                    <img src="linkedIn-icon.png" alt="LinkedIn" />
                </a>

                <a href="https://www.facebook.com/vishnusreekumar.r">
                    <img src="facebook-icon.png" alt="Facebook" />
                </a>
            </div>


        </section>
    );
}

export default ContactMe;