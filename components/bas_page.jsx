// Importation des styles CSS et des composants nécessaires
import styles from './bas_page.module.css';
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
// Composant bas_page pour afficher les événements principaux
export default function bas_page() {
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu des événements
  return (
    <div className={styles.bob}>
    <div className={`${styles.lien}mx-auto my-5`}>
     <Link href="/contact">
              Contactez moi
          </Link>
    </div>
    <div className="text-white mx-auto fs-2">exaupandak@gmail.com</div>
    <div className={styles.lien}> 
    <div><a className="" href='https://linkedin.com/in/exaucé-mpanda-kabanangi-9b74a4284'>Linkedin</a></div> 
    <div><a className="" href='https://profile.indeed.com/p/exaucm-57q7szp'>Indeed</a></div>
    <div><a className="" href='https://github.com/exauce-panda'>GitHub</a></div>
    </div>
    </div>
  );
}
