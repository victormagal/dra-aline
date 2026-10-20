import NavLink from '../nav-link/nav-link';
import styles from './tab-bar.module.css';

const items = [
  { href: '/inicio', label: 'Início' },
  { href: '/consultas', label: 'Consultas' },
  { href: '/exames', label: 'Exames' },
  { href: '/ultra', label: 'Ultra' },
  { href: '/mais', label: 'Mais' },
];

export default function TabBar() {
  return (
    <nav className={styles.tabbar} aria-label="Navegação principal">
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} className={styles.link} activeClassName={styles.active}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
