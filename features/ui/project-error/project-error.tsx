import React from "react";
import styles from "./project-error.module.scss";

interface ProjectErrorProps {
  onRetry: () => void;
}

export const ProjectError: React.FC<ProjectErrorProps> = ({ onRetry }) => {
  return (
    <div className={styles.errorAlert}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/alert-circle.svg"
        alt="alert-circle"
        className={styles.alertCircle}
      />
      <div className={styles.content}>
        <div className={styles.textSupport}>
          There was a problem while loading the project data
        </div>
        <div className={styles.action}>
          <button className={styles.buttonBase} onClick={onRetry}>
            <span className={styles.buttonText}>Try again</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
