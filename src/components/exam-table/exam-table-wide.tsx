import styles from './exam-table-wide.module.css';

export interface ExamRowWide {
  exame: string;
  primeiro: string;
  segundo: string;
  terceiro: string;
}

function Painel({ rows }: { rows: ExamRowWide[] }) {
  return (
    <section className={styles.painel}>
      <div className={`${styles.linha} ${styles.cabecalho}`}>
        <span>Exame</span>
        <span>1º tri</span>
        <span>2º tri</span>
        <span>3º tri</span>
      </div>
      {rows.map((r) => (
        <div key={r.exame} className={styles.linha}>
          <span>{r.exame}</span>
          <span>{r.primeiro}</span>
          <span>{r.segundo}</span>
          <span>{r.terceiro}</span>
        </div>
      ))}
    </section>
  );
}

// Tablet e desktop: os três trimestres lado a lado, em dois painéis (como no Figma).
export default function ExamTableWide({ rows }: { rows: ExamRowWide[] }) {
  const meio = Math.ceil(rows.length / 2);
  return (
    <div className={styles.paineis}>
      <Painel rows={rows.slice(0, meio)} />
      <Painel rows={rows.slice(meio)} />
    </div>
  );
}
