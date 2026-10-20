import styles from '../mais.module.css';

export default function MaisSaude() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Ficha da gestação</p>
        <h1>Saúde e contatos</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.card}>
          <p className={styles.label}>Alergias</p>
          <div className={styles.chips}>
            <span className={`${styles.state} ${styles.warn}`}>Dermatites</span>
            <span className={`${styles.state} ${styles.warn}`}>Alergias respiratórias</span>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>História familiar do casal</p>
          <div className={styles.chips}>
            <span className={`${styles.state} ${styles.primary}`}>HAS / cardiopatia</span>
            <span className={`${styles.state} ${styles.primary}`}>DM</span>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Em caso de intercorrência, contatar</p>
          <p className={`${styles.body} ${styles.muted}`}>A preencher no cadastro</p>
        </section>
      </main>
    </>
  );
}
