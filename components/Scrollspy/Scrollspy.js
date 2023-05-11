import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Scrollspy.module.css";

const Scrollspy = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const active = sections.find(({ id, offset }) => {
        const section = document.getElementById(id);

        if (section) {
          const { top, height } = section.getBoundingClientRect();
          return (
            scrollPosition >= offset + top &&
            scrollPosition < offset + top + height
          );
        }

        return false;
      });

      setActiveSection(active?.id || "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="aboutusleftlinks">
      <nav className={styles.scrollspy}>
        {sections.map(({ id, title }) => (
          <Link
            key={id}
            activeClass={styles.active}
            to={id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span className={id === activeSection ? styles.active : ""}>
              {title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Scrollspy;
