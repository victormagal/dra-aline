'use client';

import { useState } from 'react';
import NavLink from '../../../components/nav-link/nav-link';
import ExamTable from '../../../components/exam-table/exam-table';
import ExamTableWide, { type ExamRowWide } from '../../../components/exam-table/exam-table-wide';
import styles from '../exames.module.css';
import { PRIMEIRO_TRI, SEGUNDO_TRI, TERCEIRO_TRI } from './resultados.data';

const OBSERVACAO_TERCEIRO = 'Alguns exames do 3º trimestre foram refeitos em 04/09/2026.';

const trimestres = [
  { label: '1º tri', rows: PRIMEIRO_TRI, observacao: null },
  { label: '2º tri', rows: SEGUNDO_TRI, observacao: null },
  { label: '3º tri', rows: TERCEIRO_TRI, observacao: OBSERVACAO_TERCEIRO },
];

// Uma linha por exame, com os três trimestres (usado no tablet e no desktop).
const linhasLargas: ExamRowWide[] = PRIMEIRO_TRI.map((r) => ({
  exame: r.exame,
  primeiro: r.valor,
  segundo: SEGUNDO_TRI.find((s) => s.exame === r.exame)?.valor ?? '—',
  terceiro: TERCEIRO_TRI.find((t) => t.exame === r.exame)?.valor ?? '—',
}));

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

        {/* Celular: abas por trimestre e uma tabela por vez */}
        <div className={styles.phoneOnly}>
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
        </div>

        {/* Tablet e desktop: três trimestres lado a lado, sem abas */}
        <div className={styles.wideOnly}>
          <ExamTableWide rows={linhasLargas} />
          <section className={styles.card}>
            <p className={styles.obs}>{OBSERVACAO_TERCEIRO}</p>
          </section>
        </div>
      </main>
    </>
  );
}
