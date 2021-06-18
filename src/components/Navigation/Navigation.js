import styles from './Navigation.css';
import '../../Animation.css';

function Navigation() {
    function goToSummarySection(e) {
        const id = e.target.id;
        const map = {
            'about-me': 'about-me-summary',
            'experience': 'experience-summary',
            'contact-me': 'contact-me-summary',
        };
        document.getElementById(map[id]).scrollIntoView({ behavior: 'smooth', block: "start" });
    }

    return (
      <nav className="fade-in-text-300">
          <ul>
              <li>
                  <a>Home</a>
                  <a id="about-me" onClick={goToSummarySection}>About Me</a>
                  <a id="experience" onClick={goToSummarySection}>Experience</a>
                  <a id="contact-me" onClick={goToSummarySection}>Contact Me</a>
              </li>
          </ul>
      </nav>
    );
}

export default Navigation;