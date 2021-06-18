import styles from './Navigation.css';

function Navigation() {
    return (
      <nav className={styles.nav}>
          <ul>
              <li>
                  <a href="">Home11</a>
                  <a href="">About Me</a>
                  <a href="">Experience</a>
                  <a href="">Education</a>
              </li>
          </ul>
      </nav>
    );
}

export default Navigation;