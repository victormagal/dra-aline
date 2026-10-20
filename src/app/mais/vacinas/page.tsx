import styles from '../mais.module.css';

type Status = 'ok' | 'warn' | 'muted-state';

const vacinas: { name: string; label: string; status: Status; note: string }[] = [
  { name: 'DTpa', label: 'Aplicada', status: 'ok', note: 'Aplicada em 24/08/2026' },
  { name: 'Hepatite B', label: 'Pendente', status: 'warn', note: 'Anotação: relato de exame de sangue urgente' },
  { name: 'Influenza', label: 'Recusada', status: 'muted-state', note: 'Recusa registrada' },
  { name: 'COVID-19', label: 'Recusada', status: 'muted-state', note: 'Recusa registrada' },
  { name: 'Bronquiolite (bebê)', label: 'Aplicada', status: 'ok', note: 'Aplicada em 24/08/2026' },
];

export default function MaisVacinas() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Vacinas</p>
        <h1>Calendário vacinal</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.card}>
          <p className={styles.body}>
            DTpa (difteria, tétano e coqueluche): aplicar entre 28 e 36 semanas em todas as gestações. A coqueluche
            pode ser fatal ao recém-nascido. É desejável que os contactantes do bebê também sejam imunizados.
          </p>
          <p className={styles.note}>Na rede pública, a gratuidade é restrita às gestantes.</p>
        </section>

        {vacinas.map((v) => (
          <section key={v.name} className={styles.card}>
            <div className={styles.vtop}>
              <span className={styles.vname}>{v.name}</span>
              <span className={`${styles.state} ${styles[v.status]}`}>{v.label}</span>
            </div>
            <p className={`${styles.muted} ${styles.vnote}`}>{v.note}</p>
          </section>
        ))}
      </main>
    </>
  );
}
