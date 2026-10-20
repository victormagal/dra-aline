import NavLink from '../../../components/nav-link/nav-link';
import styles from '../ultra.module.css';
import CurvaChart from './curva.chart';

const medicoes = [
  { label: '30+1 sem', peso: '1.495 g' },
  { label: '34+2 sem', peso: '2.466 g' },
  { label: '36 sem', peso: '2.744 g' },
];

export default function UltraCurva() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Ultrassonografias</p>
        <h1>Curva de crescimento</h1>
      </header>

      <main className={styles.content}>
        <nav className={styles.seg}>
          <NavLink href="/ultra/ultrassons" className={styles.segLink} activeClassName={styles.active}>
            Ultrassons
          </NavLink>
          <NavLink href="/ultra/curva" className={styles.segLink} activeClassName={styles.active}>
            Curva de crescimento
          </NavLink>
        </nav>

        <section className={styles.card}>
          <p className={styles.label}>Peso estimado fetal (Hadlock)</p>
          <div className={styles.legend}>
            <span className={`${styles.state} ${styles.mediana}`}>Mediana</span>
            <span className={`${styles.state} ${styles.faixa}`}>Faixa P10–P90</span>
          </div>
          <CurvaChart />
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Medições</p>
          <div className={styles.cells}>
            {medicoes.map((m) => (
              <div key={m.label} className={styles.cell}>
                <span className={styles.k}>{m.label}</span>
                <span className={styles.v}>{m.peso}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
