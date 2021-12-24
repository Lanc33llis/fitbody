import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles["hero-container"]}>
          <div className={styles["top-left"]}>
            <h1>
              getting fit? don&apos;t sweat it
            </h1>
            <h2>
              find the right workout for your body based off of your goals, health, diet, and lifestyle
            </h2>
          </div>
          <div className={styles["top-right"]}>
            <h1>
              FITBODY
            </h1>
          </div>
          <button className={styles.bottom}>
            <h1>
              GET FIT!
            </h1>
          </button>
        </div>
      </div>
      <hr className={styles.break}/>
      <div className={styles["explained-container"]}>
        <h1>
          your free body-trainer and nutritionist
        </h1>
        <div className={styles["body-trainer-container"]}>
          <div className={styles.goals}>
            <h2>
              Get the right workout for your goals
            </h2>
            <h3>
              Know you want to be lean? Bigger arms? Bigger arms and leaner? We can find exactly the right workout for your personal goals
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
