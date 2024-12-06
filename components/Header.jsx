import styles from './Header.module.css';
import MenuNav from './MenuNav';
// Déclaration du composant fonctionnel Header qui accepte setPage comme prop
export default function Header() {
  return (
    // Enveloppe tout le contenu de l'en-tête dans une balise <header>
    <header className={styles.header}>
       <div className={`${styles.alignement}`}>
              {/*Menu de navigation presenter dans le header du site */}
              <div className={styles.nav}>
              <MenuNav/>
              </div>
            </div>
    </header>
  );
}
