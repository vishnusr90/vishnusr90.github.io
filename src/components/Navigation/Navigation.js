import styles from './Navigation.css';
import '../../Animation.css';

function Navigation() {
    return (
      <nav className="fade-in-text-300">
          <ul>
              <li>
                  <a href="">Home</a>
                  <a href="">About Me</a>
                  <a href="">Experience</a>
                  <a href="">Education</a>
              </li>
          </ul>
      </nav>
    );
}

export default Navigation;