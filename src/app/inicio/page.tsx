import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.hero}>
        <div>
          <p className={styles.brand}>Dra. Aline Magalhães</p>
          <p className={styles.hello}>Olá, Patrícia</p>
          <h1 className={styles.status}>Pós-parto</h1>
          <p className={styles.meta}>Bebê nasceu em 01/10/2026 · 12 dias</p>
          <p className={styles.meta}>Próxima consulta: pós-parto, 19/10/2026</p>
        </div>
        <div className={styles.topo}>
          <Image src="/assets/logo-marca-branca.svg" alt="Logotipo Dra. Aline Magalhães" width={56} height={56} unoptimized />
        </div>
      </header>

      <main className={styles.content}>
        <section className={styles.hcard}>
          <p className={styles.label}>Próxima consulta</p>
          <p className={styles.title}>Consulta pós-parto</p>
          <p className={styles.sub}>Segunda-feira, 19/10/2026</p>
          <Link className={styles.hcardBtn} href="/consultas/calendario">
            Ver detalhes
          </Link>
        </section>

        <section className={styles.hcard}>
          <p className={styles.label}>Pendências</p>
          <div className={styles.line}>
            <span>Consulta pós-parto</span>
            <span className={`${styles.state} ${styles.ok}`}>Agendada</span>
          </div>
          <div className={styles.line}>
            <span>Vacina hepatite B</span>
            <span className={`${styles.state} ${styles.warn}`}>Pendente</span>
          </div>
        </section>

        <section className={styles.hcard}>
          <p className={styles.label}>Bebê</p>
          <div className={styles.pair}>
            <div className={styles.pairItem}>
              <span className={styles.k}>Nascimento</span>
              <span className={styles.v}>01/10/2026</span>
            </div>
            <div className={styles.pairItem}>
              <span className={styles.k}>Idade</span>
              <span className={styles.v}>12 dias</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
