import NavLink from '../../../components/nav-link/nav-link';
import styles from '../ultra.module.css';
import CurvaChart from './curva.chart';
import { MEDICOES_PACIENTE } from './curva.data';

const medicoes = MEDICOES_PACIENTE.map((m) => ({
  label: m.label,
  peso: `${Math.floor(m.pesoG / 1000)}.${String(m.pesoG % 1000).padStart(3, '0')} g`,
}));

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
          <p className={styles.label}>Peso estimado fetal · referência INTERGROWTH-21st</p>
          <div className={styles.legend}>
            <span className={`${styles.state} ${styles.mediana}`}>Mediana</span>
            <span className={`${styles.state} ${styles.faixa}`}>Faixa P10–P90</span>
            <span className={`${styles.state} ${styles.paciente}`}>Paciente</span>
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
