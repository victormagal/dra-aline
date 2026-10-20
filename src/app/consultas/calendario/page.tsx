import NavLink from '../../../components/nav-link/nav-link';
import styles from '../consultas.module.css';

export default function ConsultasCalendario() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Consultas</p>
        <h1>Calendário da gestação</h1>
      </header>

      <main className={styles.content}>
        <nav className={styles.seg}>
          <NavLink href="/consultas/calendario" className={styles.segLink} activeClassName={styles.active}>
            Calendário
          </NavLink>
          <NavLink href="/consultas/acompanhamento" className={styles.segLink} activeClassName={styles.active}>
            Acompanhamento
          </NavLink>
        </nav>

        <section className={styles.card}>
          <p className={styles.label}>Regra de acompanhamento</p>
          <div className={styles.rule}>
            <span className={`${styles.dot} ${styles.dotPrimary}`} />
            <div>
              <p className={styles.t}>Até 30 semanas</p>
              <p className={styles.s}>Consultas mensais</p>
            </div>
          </div>
          <div className={styles.rule}>
            <span className={`${styles.dot} ${styles.dotMagenta}`} />
            <div>
              <p className={styles.t}>32 a 36 semanas</p>
              <p className={styles.s}>Consultas quinzenais</p>
            </div>
          </div>
          <div className={styles.rule}>
            <span className={`${styles.dot} ${styles.dotOk}`} />
            <div>
              <p className={styles.t}>A partir de 37 semanas</p>
              <p className={styles.s}>Consultas semanais até o parto</p>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Próximas consultas</p>
          <p className={`${styles.body} ${styles.medium}`}>Nenhuma consulta agendada no momento.</p>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Atenção</p>
          <p className={styles.body}>
            Ao final da consulta, deixe a próxima agendada para não ter problemas com indisponibilidade de agenda.
          </p>
        </section>
      </main>
    </>
  );
}
