import NavLink from '../../../components/nav-link/nav-link';
import styles from '../exames.module.css';

export default function ExamesJanelas() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Exames laboratoriais</p>
        <h1>Janelas de coleta</h1>
      </header>

      <main className={styles.content}>
        <nav className={styles.seg}>
          <NavLink href="/exames/janelas" className={styles.segLink} activeClassName={styles.active}>
            Janelas de coleta
          </NavLink>
          <NavLink href="/exames/resultados" className={styles.segLink} activeClassName={styles.active}>
            Resultados
          </NavLink>
        </nav>

        <div className={styles.duas}>
        <section className={styles.card}>
          <p className={styles.body}>
            Durante a gestação realizamos ao menos 3 avaliações laboratoriais (1º, 2º e 3º trimestre): nutrição,
            hormônios e sorologias.
          </p>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Calendário de exames</p>
          <div className={styles.marco}>
            <span className={`${styles.dot} ${styles.dotMagenta}`} />
            <div>
              <p className={styles.t}>A partir de 8 semanas</p>
              <p className={styles.s}>Sexagem fetal (opcional, sangue materno)</p>
            </div>
          </div>
          <div className={styles.marco}>
            <span className={`${styles.dot} ${styles.dotMagenta}`} />
            <div>
              <p className={styles.t}>11 semanas</p>
              <p className={styles.s}>Perfil bioquímico materno: PAPP-A e fração livre do βhCG</p>
            </div>
          </div>
          <div className={styles.marco}>
            <span className={`${styles.dot} ${styles.dotPrimary}`} />
            <div>
              <p className={styles.t}>24 a 26 semanas</p>
              <p className={styles.s}>TOTG (teste oral de tolerância à glicose). Indispensável</p>
            </div>
          </div>
          <div className={styles.marco}>
            <span className={`${styles.dot} ${styles.dotWarn}`} />
            <div>
              <p className={styles.t}>35 a 37 semanas</p>
              <p className={styles.s}>Exame do cotonete: pesquisa de Streptococcus agalactiae</p>
            </div>
          </div>
        </section>

        </div>

        <section className={`${styles.card} ${styles.full}`}>
          <p className={styles.label}>Preparo · TOTG</p>
          <p className={styles.body}>
            Chegar ao laboratório pela manhã, em jejum de 8 a 12 horas. Ingerir 300 ml de dextrosol e coletar nova
            amostra após 60 e 120 minutos.
          </p>
        </section>
      </main>
    </>
  );
}
