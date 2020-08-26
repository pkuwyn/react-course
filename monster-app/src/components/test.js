import React from "react";
import styles from "./Test.module.scss";

const Test = (props) => {
  const { name } = props;
  return (
    <div className={styles.test}>
      <h1 className={styles.test__title}>{name}</h1>
    </div>
  );
};

export default Test;
