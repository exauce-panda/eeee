// Importation du composant Eve depuis le dossier des composants
// Assurez-vous que le chemin d'importation correspond à l'emplacement réel du fichier dans votre projet
import Eve from '@/components/Projets.jsx';
import styles from './page.module.css';
// Composant fonctionnel Event qui sert de page d'événements
export default function Event() {
    // Le composant retourne simplement le composant Eve pour le rendu
    // Ceci implique que tout le contenu spécifique aux événements est géré par le composant Eve
    return (
    <div>
    <div className={styles.all}>
    <Eve />
</div>
</div>
);
}
