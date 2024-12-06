'use client'
import CarouselProjetCenter from "./CarouProjetCenter";
import CarouselProjetMarket from "./carouProjetMarket";
import styles from "./Projets.module.css"
 // Indique que ce composant s'exécute uniquement côté client.
// Définition du composant fonctionnel Events.
export default function Events() {
  return (
    <div className={styles.bgcolors}>
      <h2 className={styles.titre}>Voici une listes des différents projets que j'ai eu à faire</h2>
    <div className={styles.bob}>
      <h3 className="text-success">1</h3>
    <div>
      <div className="fs-5">
      Un de mes projets scolaires frontend avec React, Bootstrap, consiste en la création d’un site pour un lieu événementiel avec une description rapide et claire, ainsi que quelques événements sélectionnables rapidement sur la page d'accueil, puis différentes pages pour différentes fonctionnalités. Là, il s'agit d'un stade avec plusieurs événements, dans lequel le client pourrait choisir un événement précis, acheter des billets, envoyer un message au service client, et voir une FAQ.
    </div>
    <div className={styles.carousel}>
      <CarouselProjetCenter/>
    </div>
    <div className={styles.lien}>
       <a href='https://github.com/exauce-panda/projet-progammation-web-avance.git'>Lien github du projet</a>
    </div>
    </div>
    </div> 
    <div className={styles.bob}>
      <h3 className="text-success">2</h3>
    <div>
      <div className="fs-5">
      Ce projet visait à créer une plateforme de vente en ligne accessible à tous, offrant une large gamme de produits vestimentaire. 
      Notre objectif etait de fournir une expérience d'achat pratique et agréable à nos clients, en leur offrant une navigation conviviale et des fonctionnalités pratiques, le client pouvait s'incrire dans le site ou directement choisir son ou ses vetements puis les ajouter au panier ou les acheter directement avec une carte bancaire. Pour ce projet nous avons eu besoin de mysql server et au final shopify
    </div>
    <div className={styles.carousel}>
      <CarouselProjetMarket/>
    </div>
    <div className={styles.lien}>
       <a href='https://alpha-market.genixwebservices.com'>Lien du projet</a>
    </div>
    </div>
    </div> 
    </div>
  );
}
