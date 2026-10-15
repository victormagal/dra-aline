import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-exames-resultados',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../exames.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Exames laboratoriais</p>
      <h1>Por trimestre</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/exames/janelas" routerLinkActive="active">Janelas de coleta</a>
        <a routerLink="/exames/resultados" routerLinkActive="active">Resultados</a>
      </nav>

      <nav class="tri">
        <span class="active">1º tri</span>
        <span>2º tri</span>
        <span>3º tri</span>
      </nav>

      <section class="tcard">
        <div class="trow thead"><span>Exame</span><span>1º tri</span><span>2º tri</span><span>3º tri</span></div>
        @for (r of rows; track r[0]) {
          <div class="trow">
            <span>{{ r[0] }}</span><span>{{ r[1] }}</span><span>{{ r[2] }}</span><span>{{ r[3] }}</span>
          </div>
        }
      </section>

      <section class="card">
        <p class="obs">Alguns exames do 3º trimestre foram refeitos em 04/09/2026.</p>
      </section>
    </main>
  `,
})
export class ExamesResultados {
  rows: string[][] = [
    ['Hemoglobina / hematócrito', '13,7 / 39,1', '13,1 / 37,7', '13,7 / 39,8'],
    ['Plaquetas', '291.000', '259.000', '245.000'],
    ['Coombs indireto', 'Negativo', 'Negativo', '228.000'],
    ['Glicemia / HbA1c', '89 / 5,3', '82 / 5,3', '85 / 5,0'],
    ['Insulina basal', '12,4', '17,2 (IR 3,5)', '28 (IR 5,8)'],
    ['TSH / T4 livre', '2,52 / 1,2', '2,5 / 0,82', '1,46 / 0,94'],
    ['Anti-TPO', '33', '40', '36'],
    ['Anti-tireoglobulina / TRAB', '0,96', '2,76', '1'],
    ['TGO / TGP', '11 / 17', '10 / 15', '13 / 16'],
    ['Ureia / creatinina', '20 / 0,52', '22 / 0,53', '22 / 0,49'],
    ['GamaGT / fosfatase alc.', '15 / 32', '16 / 36', '8 / 60'],
    ['Ácido úrico / PCR-US', '3,4 / 4,12', '3,6 / 6,94', '4,7 / 0,99'],
    ['Bilirrubina T / D / I', '0,38 / 0,15', '0,28 / 0,11', '—'],
    ['HIV 1 e 2 · HTLV 1 e 2 · VDRL', 'NR', 'NR', 'NR'],
    ['Toxoplasmose', 'IgG(−) IgM(−)', 'IgG(−) IgM(−)', 'IgG(−) IgM(−)'],
    ['CMV', 'IgG(+) IgM(−)', 'IgG(+) IgM(−)', 'IgG(+) IgM(−)'],
    ['Rubéola', 'IgG(+) IgM(−)', 'IgG(+) IgM(−)', 'IgG(+) IgM(−)'],
    ['HBsAg / anti-HBs', 'Imunizada', 'Imunizada', 'Imunizada'],
    ['Anti-HBc / anti-HCV', 'NR', 'NR', 'NR'],
    ['Ferro / ferritina', '117 / 137', '96 / 92', '86 / 28'],
    ['Saturação de transferrina', '37%', '25%', '19%'],
    ['Homocisteína', '5,2', '3,4', '4,3'],
    ['Vitamina A', '47', '36,2', '24,5'],
    ['Vitamina B12', '710', '1055', '910'],
    ['Vitamina E', '—', '2,6', '—'],
    ['Ácido fólico eritrocitário', '465,6', '689,4', '629'],
    ['Cobre / lipoproteína A', '133 / 18', '—', '169 / 23'],
    ['Selênio / zinco', '65,9 / 97', '54,9 / 67', '77,1 / 87'],
    ['Cálcio / magnésio', '11,9', '8,8 / 11,9', '9,1 / 12,1'],
    ['25OH vit D / 1,25 vit D3', '29 / 74,2', '56 / 198,1', '56 / 107'],
    ['PTH', '—', '—', '27,4'],
    ['EAS (urina)', 'Normal', 'Normal', 'Normal'],
    ['Urocultura', 'Negativa', 'Negativa', 'Negativa'],
    ['Proteínas totais / albumina', '7,2 / 4,3', '6,3 / 3,5', '6,6 / 3,6'],
    ['Fibrinogênio', '278', '420', '401'],
    ['TOTG (glicemias)', '82 / 168 / 138', '—', '—'],
    ['Cultura Strepto B', '—', '—', 'Negativo (17/09)'],
    ['Cálcio urinário', '—', '11,9', '—'],
    ['PAPP-A', '—', '—', '—'],
    ['Fração livre do βhCG', '—', '—', '—'],
  ];
}
