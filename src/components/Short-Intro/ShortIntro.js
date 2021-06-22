import '../../Animation.css';
import './ShortIntro.css';

function ShortIntro() {
    return (
        <section id="short-intro">
            <div className="row">
                <div className="scroll name-section intro">
                    <div>
                        <div className="name fade-in-text-300">Hello, I am Vishnu S R</div>
                        <div className="name-fade fade-in-text-600">And I build microservices</div>
                    </div>
                </div>
                <div id="my-pic" className="fade-in-text-300">
                    <picture>
                        <source srcSet="./my-pic.jpeg" media="all and (min-width:800px) and (max-width:1200px)"/>
                        <img src="my-pic.jpeg" alt="My Picture" />
                    </picture>
                </div>
            </div>
        </section>
    );
}

export default ShortIntro;