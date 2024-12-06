import styles from './Description.module.css';// Importation du fichier CSS spécifique au composant DescAlpha
import Image from "next/legacy/image"; // Importation du composant Image de Next.js pour une gestion optimisée des images
import logobalise from "@/public/Logo/balise.png"; // Importation du logo depuis les ressources publiques
import logodev from "@/public/Logo/devweb.png"; // Importation du logo depuis les ressources publiques
// Importation du hook useState de React pour gérer l'état local du composant
import { useState } from 'react';
import MainEvent from './bas_page';
import React, { useEffect, useRef } from "react";
// Définition du composant fonctionnel DescAlpha
export default function DescAlpha() {
    // Déclaration d'un état local pour contrôler l'affichage du texte complet ou réduit
    const [showFullText, setShowFullText] = useState(false);
    // Définition d'une fonction pour basculer entre l'affichage complet et réduit du texte
    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    }
    // Rendu du composant DescAlpha  
    return (
        <div className={`${styles.bob}`}>
            <div className="d-flex">
            <div className={`text-white ${styles.identification}`}>
                <h1 className="fw-bold">Developpeur Web junior front-end</h1>
                <div className="text-warning fs-4 fw-bold">Exauce Mpanda Kabanangi</div> 
                <div className="text-warning fs-5">Reside à Gatineau, QC</div>     
                <div className="text-white fs-5">Diplôme d'étude collegiale en programmation informatique</div>
                <div className="text-secondary fw-light">SEO Friendly | Integration d'UI responsive et interactive | Integration d'API</div>                                  
            </div>
            <div className={`${styles.image}`}>
                     <Image src={logobalise} alt="logo balise" width={240} height={240} /> 
            </div>
            </div>
            <div className="text-success text-center mx-auto my-5">Salut</div>
            {/* Insertion du composant Carousel pour la présentation d'images défilantes */}           
            <div className="text-white text-center mx-auto my-5" style={{ maxWidth: '70%', fontSize: '1.2rem', lineHeight: '1.5' }}>
                {/* Affichage conditionnel du texte : complet si showFullText est vrai, réduit sinon */}
                <p className={`${styles.resumer}`}>
                    {showFullText ? (
                        // Texte complet de ma description
                        `Passionné par l'informatique depuis mon enfance, je passais beaucoup de temps devant l'ordinateur, ce qui m'a naturellement conduit à m'intéresser à la programmation.

Au début de mon parcours, j'ai étudié le génie informatique à l'Université d'Ottawa pendant presque deux ans. Cependant, j'ai dû interrompre ces études en raison de contraintes financières liées aux frais académiques. Par la suite, j'ai poursuivi mon chemin au Collège La Cité, où j'ai pu approfondir mes compétences en programmation.

Mon apprentissage ne s'est pas limité à mes études. Je consacre également du temps à me former de manière autonome grâce à des plateformes en ligne et des tutoriels sur YouTube. Actuellement, je m'efforce d'améliorer ma maîtrise de React et de ses composants tout en développant mes compétences en UI/UX design.

Je suis convaincu de mes capacités, notamment en matière de travail en équipe, d'autogestion, et bien sûr, de mes compétences en frontend. C'est pourquoi je suis persuadé d'être la personne idéale pour contribuer à vos projets.`
                    ) : (
                        // Version raccourcie du texte pour inciter à lire plus
                        `J'ai suivi deux années d'études en programmation informatique au Collège La Cité, où j'ai obtenu mon diplôme en août 2024. Actuellement, je suis à la recherche d'un emploi à temps plein dans le domaine du développement web.`
                    )}
                </p>
                <div className="text-center">
                    {/* Bouton pour basculer l'affichage du texte */}
                    <button onClick={toggleReadMore} className="btn-success btn mt-3">
                        {showFullText ? 'Revenir au text précedent' : 'En apprendre plus sur moi'}
                    </button>
                </div>
                <div className={styles.competance}>
                    <div>
                    <Image src={logodev} alt="logo devweb" width={80} height={80} /> 
                    </div>
                <div className="fs-4">
                    Developpeur Front-End
                </div>
                <div className="text-warning fs-5 text-decoration-underline">
                    Languages
                </div>
                <div className="justify-content-center text-white">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>C#</div>
                </div>
                <div className="text-warning fs-5 text-decoration-underline">Outils de Dev</div>
                <div className="justify-content-center">
                <div className="text-white">
                   React.js
                </div>
                <div className="text-white">
                    GitHub
                </div>
                <div className="text-white">
                    VS Code
                </div>
                <div className="text-white">
                 Bootstrap 
                </div>
                </div>
                </div>
            </div>
            <div>
                <MainEvent/>
            </div>
        </div>
    );
}
