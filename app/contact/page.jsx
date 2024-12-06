// Importe le composant ContactPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/Contact' est correct.
import ContactPage from '@/components/Contact';
// Composant fonctionnel Contact servant de wrapper ou d'interface pour le composant ContactPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans ContactPage si nécessaire.
export default function Contact() {
    // Rendu du composant ContactPage pour afficher le contenu de la page de contact.
    return <ContactPage />;
}
