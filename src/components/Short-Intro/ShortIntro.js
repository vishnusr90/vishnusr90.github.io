import '../../Animation.css';
import './ShortIntro.css';

function ShortIntro() {
    return (
        <section id="short-intro">
            <div className="scroll name-section intro">
                <div>
                    <div className="name fade-in-text-300">Hello, I am Vishnu S R</div>
                    <div className="name-fade fade-in-text-600">And I build microservice applications</div>
                </div>
                <div id="my-pic">
                    <img src="my-pic.jpeg" className="fade-in-text-300"/>
                </div>
            </div>
        </section>
    );
}

export default ShortIntro;