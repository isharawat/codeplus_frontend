import styles from "../styles/Questions.module.css";
import style from "../styles/Home.module.css";
function DiffQuestion() {
  return (
    <li className={styles.li}>
      <span>Minimum spanning tree</span>
      <span>points</span>
    </li>
  );
}
export default function Question() {
  return (
    <div>
      <div>
        <ul className={styles.list}>
          <DiffQuestion />
          <DiffQuestion />
          <DiffQuestion />
          <DiffQuestion />
        </ul>
      </div>
    </div>
  );
}
