import './AboutMe.css';

function AboutMe() {
    return (
        <section id="about-me-summary">
            <div className="heading">Who Am I ?</div>

            <div className="scroll name-section">
                <p className="widthh">
                    I am a Singapore based Software Engineer working at DBS Bank.
                    I work on full stack and currently working on internal applications at DBS
                </p>

                <p>Some of the technologies that I currently work with are</p>

                <div className="skills">
                    <div>
                        <ul>
                            <li>Kotlin</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>JavaScript</li>
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