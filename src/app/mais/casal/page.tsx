import styles from '../mais.module.css';

export default function MaisCasal() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Ficha da gestação</p>
        <h1>Dados do casal</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.card}>
          <p className={styles.label}>Gestante</p>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>Nome</span><span className={styles.v}>Patrícia Regina B. Moura</span></div>
            <div className={styles.fld}><span className={styles.k}>Idade</span><span className={styles.v}>36 anos</span></div>
          </div>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>Profissão</span><span className={styles.v}>PMDF</span></div>
            <div className={styles.fld}><span className={styles.k}>Religião</span><span className={styles.v}>Católica</span></div>
          </div>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>Estado civil</span><span className={styles.v}>Casada</span></div>
            <div className={styles.fld}><span className={styles.k}>Tipo sanguíneo</span><span className={styles.v}>A+</span></div>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Histórico obstétrico</p>
          <div className={styles.tiles}>
            <div className={styles.tile}><span className={styles.k}>G</span><span className={styles.v}>6</span></div>
            <div className={styles.tile}><span className={styles.k}>PN</span><span className={styles.v}>3</span></div>
            <div className={styles.tile}><span className={styles.k}>PC</span><span className={styles.v}>2</span></div>
            <div className={styles.tile}><span className={styles.k}>A</span><span className={styles.v}>0</span></div>
          </div>
          <p className={`${styles.muted} ${styles.vnote}`}>G4 foi gemelar</p>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Dados da gestação</p>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>DUM</span><span className={styles.v}>01/01/2026</span></div>
            <div className={styles.fld}><span className={styles.k}>1ª USG</span><span className={styles.v}>20/02/2026 · 7+1</span></div>
          </div>
          <div className={`${styles.pair} ${styles.pairFull}`}>
            <div className={styles.fld}><span className={styles.k}>DPP</span><span className={styles.v}>08/10/2026</span></div>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>Parceiro(a)</p>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>Nome</span><span className={styles.v}>Victor Magalhães</span></div>
            <div className={styles.fld}><span className={styles.k}>Idade</span><span className={styles.v}>38 anos</span></div>
          </div>
          <div className={styles.pair}>
            <div className={styles.fld}><span className={styles.k}>Religião</span><span className={styles.v}>Católico</span></div>
            <div className={styles.fld}><span className={styles.k}>Tipo sanguíneo</span><span className={styles.v}>A+</span></div>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.label}>História prévia / gestações anteriores</p>
          <div className={styles.lines}>
            <p>G4: gemelar mono/di</p>
            <p>Hipotireoidismo</p>
            <p>G1 e G2: cesarianas</p>
            <p>G3 e G4: parto normal, sem intercorrências</p>
          </div>
        </section>
      </main>
    </>
  );
}
