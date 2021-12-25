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
          your free personal trainer and nutritionist
        </h1>
        <div className={styles["personal-trainer-container"]}>
          <div className={styles.goals}>
            <h2>
              Got Goals? Get a routine
            </h2>
            <h3>
              Generate the best workout routine matching your goals
            </h3>
          </div>
          <div className={styles["circle-1"]} />
          <div className={styles["circle-2"]} />
          <div className={styles["circle-3"]} />
          <div className={styles["circle-4"]} />
          <div className={styles["circle-5"]} />
          <div className={styles.sourced}>
            <h2>
              Sourced from reliable fitness sources
            </h2>
            <h3>
              Get effective exercises from reliable sources
            </h3>
          </div>
          <div className={styles.specialized}>
            <h1>
              SPECIALIZED
            </h1>
          </div>
          <div className={styles.diet}>
            <h2>
              Accounts for your diet!
            </h2>
            <h3>
              Love carbs or not? Fitbody can adjust for your diet!
            </h3>
          </div>
          <div className={styles.health}>
            <h2>
              Overweight?
            </h2>
            <h3>
              Get a workout plan that eases into your goals
            </h3>
          </div>
          <div className={styles.lifestyle}>
            <h2>
              Got Asthma? Cold?
            </h2>
            <h3>
              Fitbody works around your lifestyle, so you can get the best workout
            </h3>
          </div>
          <div className={styles["minutes"]}>
            <h1>
              It takes less than 5 minutes!
            </h1>
          </div>
          <div className={styles["bottom-right"]} />
          <div className={styles["top"]} />
        </div>
      </div>
    </div>
  )
}
