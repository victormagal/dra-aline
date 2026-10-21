import Link from 'next/link';
import styles from './mais.module.css';

const items = [
  { letter: 'F', title: 'Ficha do casal', sub: 'Dados pessoais e do parceiro', route: '/mais/casal' },
  { letter: 'S', title: 'Saúde e contatos', sub: 'Alergias, história clínica e contatos', route: '/mais/saude' },
  { letter: 'V', title: 'Vacinas', sub: '2 aplicadas · 1 pendente · 2 recusadas', route: '/mais/vacinas' },
];

export default function Mais() {
  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Conta e registros</p>
        <h1>Mais</h1>
      </header>

      <main className={styles.content}>
        <div className={styles.menu}>
        {items.map((item) => (
          <Link key={item.route} className={styles.item} href={item.route}>
            <span className={styles.icon}>{item.letter}</span>
            <span className={styles.texts}>
              <span className={styles.t}>{item.title}</span>
              <span className={styles.s}>{item.sub}</span>
            </span>
            <span className={styles.chev}>›</span>
          </Link>
        ))}
        </div>
      </main>
    </>
  );
}
