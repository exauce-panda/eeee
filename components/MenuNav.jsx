'use client' // Indique que ce fichier doit être exécuté uniquement côté client
import styles from './MenuNav.module.css'; // Importation des styles CSS pour ce composant
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
// Définition du composant fonctionnel MenuNav
export default function MenuNav() {
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu du composant de navigation
  return (
    <nav className={`${styles.nav}`}> {/* Application des styles au composant nav */}
      <ul className="nav"> {/* Utilisation de classes Bootstrap pour le style et l'alignement */}
        {/* Liste des liens de navigation */}
        <li>
          <Link href="/" className={pathname === '/' ? `text-success` : 'nav-item'}>
              Accueil
          </Link>
        </li>
        <li>
          <Link href="/projets" className={pathname === '/projets' ? `text-success` : 'nav-item'}>
              Mes projets
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? `text-success` : 'nav-item'}>
              Contact
          </Link>
        </li>
        <li>
          <Link href="/faq" className={pathname === '/faq' ? `text-success` : 'nav-item'}>
              FAQ
          </Link>
        </li>
        <li>
          <Link href="/test" className={pathname === '/test' ? `text-success` : 'nav-item'}>
              test
          </Link>
        </li>
      </ul>
    </nav>
  );
}
