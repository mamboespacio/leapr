import React from "react";
import styles from "./Marquee.module.css";

const Marquee = (props) => {
  const { rtl, items } = props;
  return (
    <div className={styles.marquee}>
      <div
        className={rtl ? styles.marqueeContentLeft : styles.marqueeContentRight}
      >
        {items.map((item, index) => {
          return (
            <div className={styles.marqueeItem} key={index}>
              <a>{item.name}</a>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Marquee;
