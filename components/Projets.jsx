'use client'
import CarouselProjetCenter from "./CarouProjetCenter";
import CarouselProjetMarket from "./carouProjetMarket";
import styles from "./Projets.module.css"
 // Indique que ce composant s'exécute uniquement côté client.
// Définition du composant fonctionnel Events.
export default function Events() {
  return (
    <div className={styles.bgcolors}>
      <h2 className={styles.titre}>Voici une listes des differents projets que j'ai eu a faire</h2>
    <div className={styles.bob}>
      <h3 className="text-success">1</h3>
    <div>
      <div>
      Un de mes projets scolaire frontend avec React, bootstrap sur la création d’un site pour lieu évènementiel avec une description rapide et clair et quelques evement selectionnable rapidement a la page d'acceil puis differente pages pour differente fonctionnalités. la c'est un stade avec plusieurs évènements dans lequel le client pourrait choisir un evenement precis, acheter des billets, envoyer un message au service client, voir une FAQ
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
      <div>
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
