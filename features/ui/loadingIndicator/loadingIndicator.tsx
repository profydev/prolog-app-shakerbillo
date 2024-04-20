import React, { useEffect, useState } from "react";
import styles from "./loadingIndicator.module.scss";

export const LoadingIndicator = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(false);
      setText("Waiting for 3 seconds to be loaded");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {showImg ? (
          <span className={styles.content}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/loading-circle.svg"
              alt="spinner loader"
              className={styles.loadingCircle}
            />
          </span>
        ) : (
          <h3>{text}</h3>
        )}
      </div>
    </>
  );
};
