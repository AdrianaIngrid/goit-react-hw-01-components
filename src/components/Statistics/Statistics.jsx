import data from './data.json';
import styles from './Statistics.module.css';
function Statistics() {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

        <ul className={styles.statList}>
          <li className={styles.item}>
            <span className={styles.label}>{data[0].label}</span>
            <span className={styles.percentage}>{data[0].percentage} %</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>{data[1].label}</span>
            <span className={styles.percentage}>{data[1].percentage} %</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>{data[2].label}</span>
            <span className={styles.percentage}>{data[2].percentage} %</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>{data[3].label}</span>
            <span className={styles.percentage}>{data[3].percentage} %</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>{data[4].label}</span>
            <span className={styles.percentage}>{data[4].percentage}%</span>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Statistics;
