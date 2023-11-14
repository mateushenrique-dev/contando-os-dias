"use client"

import styles from "./style.module.scss";
import ArrowIcon from "../../assets/icon-arrow.svg";
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useSetRecoilState } from "recoil";
import { dates } from '../../state/date-atom';

export default function Form() {

  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const setDate = useSetRecoilState(dates);

  function calculateDate(e: FormEvent) {
    e.preventDefault()

    const actualDate = new Date();
    const date = new Date(year, month - 1, day);
    let differenceInMilisseconds: number;

    if (actualDate < date) differenceInMilisseconds = date.getTime() - actualDate.getTime();
    else differenceInMilisseconds = actualDate.getTime() - date.getTime();

    const years: number = Math.floor(differenceInMilisseconds / (365.25 * 24 * 60 * 60 * 1000));
    const months: number = Math.floor((differenceInMilisseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days: number = Math.floor((differenceInMilisseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    setDate({
      days,
      months,
      years
    })
  }

  return (
    <form className={styles.form} onSubmit={calculateDate}>
      <div className={styles.fields}>
        <label className={styles.label} htmlFor="">
          Dia
          <input
            className={styles.input}
            type="number"
            min="1"
            max="31"
            required
            onChange={(e) => setDay(+e.target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="">
          Mês
          <input
            className={styles.input}
            type="number"
            min="1"
            max="12"
            required
            onChange={(e) => setMonth(+e.target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="">
          Ano
          <input
            className={styles.input}
            type="number"
            min="1"
            max="99999"
            required
            onChange={(e) => setYear(+e.target.value)}
          />
        </label>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <Image src={ArrowIcon} alt="" />
        </button>
      </div>
      
    </form>
  );
}