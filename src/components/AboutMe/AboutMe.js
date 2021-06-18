import styles from './AboutMe.css';

function AboutMe() {
    return (
        <section className="{styles.section}">
            {/*<div className="heading">About Me</div>*/}

            <div className="scroll name-section">
                <p>Hi, my name is
                    <div className="name">Vishnu S R</div>
                    <div className="name name-fade">And I build microservices</div>
                </p>
                <p className="widthh">
                    I am a Singapore based Software Engineer working at DBS Bank.
                    I work on full stack and currently work on internal applications at DBS
                </p>
            </div>
        </section>
    );
}

export default AboutMe;