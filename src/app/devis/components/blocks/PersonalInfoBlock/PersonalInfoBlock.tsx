import React from "react";
import styles from "./PersonalInfoBlock.module.scss";
import Title from "../../Title/Title";
import RadioGroup from "../../RadioGroup/RadioGroup";
import Input from "../../Input/Input";

type Props = {};

const PersonalInfoBlock: React.FC<Props> = ({}) => {
  return (
    <div className={styles.firstBlock}>
      <h1>
        <span> DEVIS</span>
      </h1>
      <div className={styles.infoText}>
        <p>
          {`Vous êtes intéréssé.e par nos structures 
haut de gamme pour votre événement ? `}
        </p>

        <p>
          {`
Racontez-nous votre projet et nous vous recontactons dans 48h pour vous conseiller 
au mieux. Soyez le plus précis possible, 
cela nous permettra d’imaginer la meilleure configuration pour votre événement. `}
        </p>
      </div>
      <Title title="Vous" className={styles.vous}>
        <>
          <RadioGroup
            name="clientType"
            values={[{ value: "professionnel" }, { value: "Particulier" }]}
          />
        </>
      </Title>

      <div className={styles.section}>
        <RadioGroup
          name="civilite"
          title="Civilité"
          values={[{ value: "Mme" }, { value: "Mr" }, { value: "Autre" }]}
        />

        <Input name="name" label="Nom :" />
        <Input name="prenom" label="Prénom :" />
        <Input name="telephone" label="Téléphone : " />
        <Input name="email" label="Email :" />

        <RadioGroup
          noWrap
          name="profType"
          title="Si professionel"
          values={[
            { value: "entreprise", label: "Entreprise" },
            { value: "collectivite", label: "collectivité" },
            { value: "association", label: "Association" },
            {
              value: "planner",
              label: "planner ou organisateur d’événement",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PersonalInfoBlock;
