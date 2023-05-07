import React, { useState } from "react";
import styles from "./Accordian.module.css";

function Accordian({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.Accordian}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.panel} ${
            activeIndex === index ? styles.open : ""
          }`}
        >
          <div className={styles.link} onClick={() => handleClick(index)}>
            {item.title}
            <span
              className={`${styles.icon} ${
                activeIndex === index ? styles.active : ""
              }`}
            ></span>
          </div>
          <div className={styles.submenu}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
