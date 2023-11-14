"use client"
import styles from "./style.module.scss";
import useGetNumbers from '../../state/hooks/useGetNumbers';

export default function Numbers() {
  const dateNumbers = useGetNumbers();

  return (
    <ul className={styles.numbers}>
      <li className={styles.number}><span>{dateNumbers.years}</span> anos</li>
      <li className={styles.number}><span>{dateNumbers.months}</span> meses</li>
      <li className={styles.number}><span>{dateNumbers.days}</span> dias</li>
    </ul>
  )
}