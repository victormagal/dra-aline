import NavLink from '../../../components/nav-link/nav-link';
import styles from '../ultra.module.css';

const items = [
  { date: '20/02/2026', ig: 'IG 7+1', text: 'VV 3,8 · CCN 9,4 · 126 bpm · CN OK' },
  { date: '31/03/2026', ig: 'IG 12+4', text: 'Morfológico T1 OK. TN 1,9 · NT 2,3. IP art. uterina 1,62. Baixo risco' },
  { date: '28/04/2026', ig: 'IG 17 sem', text: 'Pélvico · 152 bpm · placenta anterior · P 195 g' },
  { date: '27/07/2026', ig: 'IG 30+1', text: 'Ecocardiografia fetal · Cefálico · 163 bpm · P 1.495 g (P33) · LAN' },
  { date: '27/08/2026', ig: 'IG 34+2', text: 'Cefálico · 143 bpm · Doppler normal · P 2.466 g' },
  { date: '10/09/2026', ig: 'IG 36 sem', text: 'Cefálico · 138 bpm · P 2.744 g (P33)' },
];

export default function UltraUltrassons() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Ultrassonografias</p>
        <h1>Linha do tempo</h1>
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

        {items.map((u) => (
          <section key={u.date} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.date}>{u.date}</span>
              <span className={styles.chip}>{u.ig}</span>
            </div>
            <p className={styles.body}>{u.text}</p>
          </section>
        ))}
      </main>
    </>
  );
}
