import { version } from "../../../package.json";
import styles from "./page-footer.module.scss";

export const PageFooter = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.siteFooter}>
        <div className={styles.footerContent}>
          <p className={styles.footVersion}>{`Version: ${version}`}</p>
          <nav className={styles.footerLinks}>
            <a href="#">Docs</a>
            <a href="#">API</a>
            <a href="#">Help</a>
            <a href="#">Community</a>
          </nav>

          <span className={styles.logoWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-small.svg"
              alt="logo"
              className={styles.logo}
            />
          </span>
        </div>
      </footer>
    </div>
  );
};

// export default PageFooter;
