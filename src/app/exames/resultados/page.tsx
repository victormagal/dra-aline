'use client';

import { useState } from 'react';
import NavLink from '../../../components/nav-link/nav-link';
import ExamTable from '../../../components/exam-table/exam-table';
import styles from '../exames.module.css';
import { PRIMEIRO_TRI, SEGUNDO_TRI, TERCEIRO_TRI } from './resultados.data';

const trimestres = [
  { label: '1º tri', rows: PRIMEIRO_TRI, observacao: null },
  { label: '2º tri', rows: SEGUNDO_TRI, observacao: null },
  { label: '3º tri', rows: TERCEIRO_TRI, observacao: 'Alguns exames do 3º trimestre foram refeitos em 04/09/2026.' },
];

export default function ExamesResultados() {
  const [selected, setSelected] = useState(0);
  const atual = trimestres[selected];

  return (
    <>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Exames laboratoriais</p>
        <h1>Por trimestre</h1>
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

        <nav className={styles.tri} role="tablist">
          {trimestres.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              className={`${styles.triButton} ${selected === i ? styles.active : ''}`}
              aria-selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <ExamTable rows={atual.rows} />

        {atual.observacao && (
          <section className={styles.card}>
            <p className={styles.obs}>{atual.observacao}</p>
          </section>
        )}
      </main>
    </>
  );
}
