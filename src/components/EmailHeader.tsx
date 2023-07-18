import styles from "./EmailHeader.module.css";

const EmailHeader = () => {
  return (
    <div className={styles.emailHeaderContainer}>
      <a href="mailto:hello@martinoxby.com">hello@martinoxby.com</a>
    </div>
  );
};

export default EmailHeader;
