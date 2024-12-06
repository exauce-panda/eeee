// Importation du composant Home depuis le fichier home.jsx
import Home from './home';
// Objet metadata pour stocker les métadonnées de la page, telles que le titre et la description
// Ces métadonnées peuvent être utilisées pour améliorer le SEO de la page
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Portfolio Developpeur web junior front-end',
  description: 'Je suis un développeur web junior front-end spécialisé en HTML, CSS et JavaScript avec le framework React pour des sites modernes et réactifs. Découvrez mes projets, compétences, et contactez-moi pour vos besoins en développement web.',
  openGraph: {
    title: 'Portfolio Developpeur web junior front-end',
    description: 'Je suis un développeur web junior front-end spécialisé en HTML, CSS et JavaScript avec le framework React pour des sites modernes et réactifs. Découvrez mes projets, compétences, et contactez-moi pour vos besoins en développement web.',
    images: ['/Logo/balise.png']
  }
}
// Composant fonctionnel Page qui sert de wrapper pour le composant Home
// Ce composant peut être utilisé comme une page dans une application Next.js
export default function Page() {
  // Le composant retourne simplement le composant Home pour le rendu
  return (
    <div>
      <Home />
    </div>
  );
}