import styles from './exam-table.module.css';

export interface ExamRow {
  exame: string;
  valor: string;
}

export default function ExamTable({ rows }: { rows: ExamRow[] }) {
  return (
    <section className={styles.tcard}>
      <div className={`${styles.trow} ${styles.thead}`}>
        <span>Exame</span>
        <span>Resultado</span>
      </div>
      {rows.map((r) => (
        <div key={r.exame} className={styles.trow}>
          <span>{r.exame}</span>
          <span>{r.valor}</span>
        </div>
      ))}
    </section>
  );
}
