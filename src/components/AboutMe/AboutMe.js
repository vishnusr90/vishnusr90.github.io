import './AboutMe.css';

function AboutMe() {
    return (
        <section id="about-me-summary">
            <div className="heading">Who Am I ?</div>

            <div className="scroll name-section">
                <p className="widthh">
                    I am Software Engineer who has a penchant for writing clean code. Working for DBS Bank in Singapore, I build microservices.
                    I also work on front end technologies, mostly using web components.
                </p>

                <p>Some of the technologies that I currently work with are</p>

                <div className="skills">
                    <div>
                        <ul>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>MySQL</li>
                            <li>PCF</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;