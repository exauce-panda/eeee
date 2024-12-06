import styles from "./Footer.module.css"; // Importation des styles CSS spécifiques au Footer
// Définition du composant Footer
export default function Footer() {
    return (
        // Utilisation de la classe `footer` pour le style, et ajout de classes Bootstrap pour le texte centré et l'espacement
        <footer className={`${styles.footer} text-center p-4 mt-1`}>
            <p>
                {/* Affichage du copyright avec l'année en cours dynamiquement et les noms des développeurs */}
                &copy; {new Date().getFullYear()} Exauce Mpanda Kabanangi <br/>
            </p>
        </footer>
    );
}
