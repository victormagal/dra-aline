import NavLink from '../../../components/nav-link/nav-link';
import styles from '../consultas.module.css';

const consultas = [
  { date: '27/08/2026', ig: '34 sem', peso: '79 kg', pa: '—', bcf: '143', afu: '29 cm', edema: '+1/4+', conduta: 'Rotina lab T3; Fe EV; ajuste de suplementação' },
  { date: '13/08/2026', ig: '32 sem', peso: '79,9 kg', pa: '133×72', bcf: '142', afu: '28 cm', edema: '+1/4+', conduta: 'Curva glicêmica; nutrição (SOS)' },
  { date: '16/07/2026', ig: '28 sem', peso: '81,8 kg', pa: '106×68', bcf: '148', afu: '26 cm', edema: '+1/4+', conduta: 'Ajuste suplementação; USG; glicemia; dieta; AF; curva glicêmica' },
];

export default function ConsultasAcompanhamento() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Consultas</p>
        <h1>Acompanhamento</h1>
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

        {consultas.map((c) => (
          <section key={c.date} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.date}>{c.date}</span>
              <span className={styles.chip}>{c.ig}</span>
            </div>
            <div className={styles.cells}>
              <div className={styles.cell}><span className={styles.k}>Peso</span><span className={styles.v}>{c.peso}</span></div>
              <div className={styles.cell}><span className={styles.k}>P.A.</span><span className={styles.v}>{c.pa}</span></div>
              <div className={styles.cell}><span className={styles.k}>BCF</span><span className={styles.v}>{c.bcf}</span></div>
            </div>
            <div className={styles.cells}>
              <div className={styles.cell}><span className={styles.k}>AFU</span><span className={styles.v}>{c.afu}</span></div>
              <div className={styles.cell}><span className={styles.k}>Edema</span><span className={styles.v}>{c.edema}</span></div>
            </div>
            <p className={`${styles.label} ${styles.labelSpaced}`}>Conduta</p>
            <p className={styles.body}>{c.conduta}</p>
          </section>
        ))}

        <section className={styles.card}>
          <p className={styles.label}>Próxima consulta</p>
          <p className={`${styles.body} ${styles.medium} ${styles.bodyLg}`}>A agendar</p>
        </section>
      </main>
    </>
  );
}
