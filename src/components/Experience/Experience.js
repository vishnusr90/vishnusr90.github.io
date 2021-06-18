import './Experience.css';

function Experience() {
    return (
        <section id="experience-summary">
            <div className="heading">Where have I perviously worked ?</div>

            <div className="scroll">

                <div className="summary-width">
                    <div className="exp-heading">DBS Bank</div>
                    <div className="year">2018 - Present</div>
                    <div className="exp-summary">
                        DBS Bank Ltd is a Singaporean multinational banking and financial services corporation headquartered in Marina Bay, Singapore.
                        <ul>
                            <li>Currently working on developing an in house application related to credit and risk for wholesale banking division.</li>
                            <li>Microservices are developed using SpringBoot, Kotin and Java for Back end technology</li>
                            <li>The front end is written using web components (HTML5, CSS and JavaScript)</li>
                            <li>Develop and maintain multiple microservices</li>
                            <li>Decouple large application into microservices for better performance in Kotlin</li>
                            <li>Coordinated multiple production deployments simultaneously</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="scroll name-section">
                <div className="summary-width">
                    <div className="exp-heading">Life Fitness</div>
                    <div className="year">2017 - 2018</div>
                    <div className="exp-summary">
                        Life Fitness is an American fitness equipment company that specializes in the production and distribution of equipment such as stationary bikes and treadmills.
                        <ul>
                            <li>Implemented restful web services and solely managed all APIs using Apigee</li>
                            <li>Helped create POC on Google related services</li>
                            <li>Implemented code enhancements in the system</li>
                            <li>Assisted the front end team with minor UI changes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="scroll name-section">
                <div className="summary-width">
                    <div className="exp-heading">Tata Consultancy Services</div>
                    <div className="year">2013 - 2016</div>
                    <div className="exp-summary">
                        Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company, headquartered in Mumbai, Maharashtra, India
                        <ul>
                            <li>Worked in server migration project - from WebLogic to JBoss</li>
                            <li>Personally managed the deployment activities of 39 standalone application, 6 web services and 81 client applications.</li>
                            <li>Successfully implemented and optimized the time taken to consume a web service by a factor of 23%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;