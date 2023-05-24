import styles from "../../styles/Page.module.scss";

export default function Home() {
  return (
    <div className={styles.head}>
      <div className={styles.form}>
        <h2>Login</h2>
        <div>
          {" "}
          <label className={styles.label}>Username</label>
          <input type="text" className={styles.input}></input>
        </div>

        <div>
          <label className={styles.label}>password</label>
          <input type="password" className={styles.password}></input>
        </div>
        <div className={styles.check}>
          <label>checkbox</label>
          <input
            className={styles.checkbox}
            id="checkboxName1"
            type="checkbox"
          />
          <label>radio</label>
          <input id="radio" type="radio" />
        </div>
        <div>
          <a className={styles.Link} href="">
            Forgot Password
          </a>
        </div>

        <div>
          {" "}
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </div>
  );
}
