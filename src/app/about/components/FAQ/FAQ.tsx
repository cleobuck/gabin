"use client";

import React from "react";
import styles from "./FAQ.module.scss";
import Sun from "@/assets/images/sun.svg?react";
import Question from "@/components/blocks/Question/Question";
import { IsItAPhone } from "@/utils";

type Props = {};

const FAQ: React.FC<Props> = ({}) => {
  const isPhone = IsItAPhone();
  return (
    <section id="FAQ" className={styles.container}>
      <Sun className={styles.sun} />
      <h3 className={styles.title}> FAQ</h3>

      <p className={styles.introText}>
        Vous avez une question ou besoin d’informations supplémentaires ?
      </p>

      <p className={styles.introText}>
        Cette page vous aidera à mieux nous connaître et mieux comprendre nos
        produits.
      </p>

      <div className={styles.questions}>
        <Question
          buttons="tents"
          question="Quelle est la différence entre 
la tente stretch et la tente silhouette ?
"
          order={1}
        >
          <p>
            {` La tente stretch est une tente ultra-modulaire dont l’apparence peut
          véritablement être guidée par votre imagination tant son installation
          est flexible.`}
          </p>
          <p>
            {` La tente silhouette quant à elle est une tente constituée d’un voile
        translucide ivoire soutenue par des poteaux en bois massif, dont les
        poteaux centraux lui donnent cette forme si distinctive d’élégant
        chapiteau. `}
          </p>
        </Question>

        <Question
          question="Comment réserver une tente 
sur le site Inouze ?"
          order={7}
        >
          <p>
            {`   Vous souhaitez réserver une de nos tentes pour votre événement ? Rien
          de plus simple ! Faites-nous parvenir tous les détails en réalisant
          une demande de devis et nous vous recontacterons dans les 48h pour
          vous faire une proposition adaptée à votre projet.`}
          </p>
        </Question>

        <Question
          question="Je suis wedding planner, 
puis-je profiter de vos services ?"
          order={2}
        >
          <p>
            {`  Bien-sûr ! Nous travaillons régulièrement avec des wedding planner et
        c’est toujours un plaisir de trouver la structure qui conviendra
        parfaitement aux souhaits de vos clients.`}
          </p>

          <p>
            {`   Pour ces projets si personnels et intimes, nous avons à cœur de nous
        inscrire véritablement comme partenaire de confiance afin que leur grand
        jour soit à leur image.`}
          </p>
        </Question>

        <Question
          question="Quelle capacité d’accueil 
pour vos tentes ?"
          order={8}
        >
          <p>
            {`Cela va bien-sûr dépendre des caractéristiques de votre événement et de
        la mise en place choisie. `}
          </p>
          <p>
            {`Concrètement, nos tentes peuvent accueillir à partir de 85 personnes en
        dîner assis avec par exemple la tente silhouette de 10 x 15 m, et
        jusqu’à plusieurs centaines de personnes si l’on imagine l’assemblage de
        plusieurs tentes, que ce soit stretch ou silhouette.`}
          </p>

          <p>
            {`N’hésitez pas à détailler le nombre de convives et la configuration
        souhaités pour votre événement lors de votre demande de devis, nous vous
        présenterons alors les différentes possibilités.`}
          </p>
        </Question>

        <Question
          question="Combien coûte une location 
de tentes nomades ?"
          order={3}
        >
          <p>
            {` Difficile de répondre correctement à cette question puisque le prix
        dépendra des éléments nécessaires à la mise en place de votre structure,
        de sa taille et des différentes options choisies. `}{" "}
          </p>
          <p> Quelques exemples :</p>

          <p>
            Une tente stretch classique : 1000€ Plusieurs tentes stretch avec
            plancher : 1000€ Une tente silhouette : 1000€ Plusieurs tentes
            silhouette: 1000€ avec parois et plancher : 1000€
          </p>
        </Question>
        <Question
          question="Comment sont fixées les tentes ? 
Puis-je les fixer sur un sol en dur ?
"
          order={9}
          buttons="none"
        >
          <p>
            {`Les poteaux qui soutiennent les tentes sont plantés au sol, si ce n’est pas possible, alors des blocs bétons sont mis en place afin de pouvoir assurer une bonne stabilité aux poteaux et à la tente. 
`}
          </p>
        </Question>

        <div className={styles.sunDiv} style={{ order: 6 }}>
          <Sun />
        </div>

        <Question
          question="Combien de temps prend 
l’installation de la tente ?"
          buttons="none"
          order={4}
        >
          <p>{` Selon les contraintes du lieu et la taille de la structure,
        l’installation peut prendre de xx h à xx h.`}</p>
          <p>{` Pour tel festival, où était prévu un assemblage de tant de tentes avec
        plancher et blabla, il nous a même fallu prévoir xx h d’installation.`}</p>
          <p>{`    Cette phase s’anticipe facilement au gré de nos premiers échanges. Si
        besoin, nous pouvons être mis en contact directement avec les personnes
        qui gèrent le lieu choisi pour l’événement afin de rendre ces phases
        d’installation et de démontage les moins impactantes possibles.`}</p>
        </Question>

        <Question
          buttons="tent"
          question="La tente peut-elle être entièrement ouverte ou fermée sur les côtés ?"
          order={10}
        >
          <p>
            {`Les deux cas sont effectivement possibles pour toutes nos tentes. Pour
          la tente silhouette, la fermeture de l’espace est effectuée grâce à
          des parois latérales transparentes ou opaques comprises dans l’offre
          de location. Pour la tente stretch, une fermeture partielle peut être
          réalisée en abaissant un ou plusieurs côtés de la tente. La tente
          stretch peut également être fermée grâce à des parois latérales pour
          des locations longue durée ou en cas d’achat. Pour plus de détails,
          rendez-vous sur la page dédiée à notre tente stretchet à la tente
          silhouette.`}
          </p>
        </Question>

        <Question question="Agissez-vous sur toute la France ?" order={5}>
          <p>
            {`Tout à fait, nous sommes équipés pour pouvoir agir partout en France, de
        l’Alsace (notre région de cœur) à la Bretagne, en passant par la
        Picardie ou l’Occitanie, nous répondons à toutes les demandes et nous
        adaptons à tous les types de lieux.`}
          </p>

          <p>
            {`Nous nous déplaçons également en Europe, notre équipe a déjà accompagné
        des événements en Allemagne, Belgique et Pays-Bas.`}
          </p>
        </Question>

        <Question question="Comment vous contacter ?" buttons="none" order={11}>
          <p>
            {`Pour nous contacter, vous pouvez nous appeler au +33 621872678, nous
        contacter par mail à inouze.events@gmail.com ou renseigner une demande
        de devis.`}
          </p>
          <p>
            {`Quel que soit votre projet ou son niveau d’avancement, cela nous
        permettra d’avoir suffisamment d’informations pour vous faire une
        réponse adaptée et pertinente.`}
          </p>
        </Question>

        <Question
          question="Comment choisir entre tente 
Stretch et tente silhouette ?"
          buttons="tent"
          order={12}
        >
          <p>
            {`Votre goût pourra se forger sur des préférences esthétiques ou sur les
        possibilités que laissent l’une ou l’autre.`}
          </p>
          <p>
            {`Néanmoins, lorsque vous ferez votre demande de devis, nous gardons
        toujours à l’esprit les caractéristiques de chacun de nos produits afin
        de vous conseiller et vous orienter au mieux`}
          </p>
          <p>
            {`En effet, certains lieux, contraintes d’organisation,
        souhaits de décoration, etc amèneront naturellement à un type de tente
        plutôt qu’à un autre.`}
          </p>
          .
        </Question>
      </div>
    </section>
  );
};

export default FAQ;
