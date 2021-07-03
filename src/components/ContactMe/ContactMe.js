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
                <a href="https://www.linkedin.com/in/vishnusr90" target="_blank" rel="noopener">
                    <img src="linkedIn-icon.png" alt="LinkedIn" />
                </a>
                <a href="mailTo:vishnusr01@gmail.com">
                    <img src="gmail-icon.png" alt="Gmail" />
                </a>
                <a href="https://github.com/vishnusr90/" target="_blank" rel="noopener">
                    <img src="github-new.png"alt="Github" />
                </a>
                <a href="https://www.facebook.com/vishnusreekumar.r" target="_blank" rel="noopener">
                    <img src="facebook-icon.png" alt="Facebook" />
                </a>
            </div>
        </section>
    );
}

export default ContactMe;