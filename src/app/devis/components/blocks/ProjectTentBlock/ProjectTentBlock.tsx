import React from "react";
import styles from "./ProjectTentBlock.module.scss";
import Title from "../../Title/Title";
import Input from "../../Input/Input";
import TextArea from "../../TextArea/TextArea";
import RadioGroup from "../../RadioGroup/RadioGroup";

type Props = {};

const ProjectTentBlock: React.FC<Props> = ({}) => {
  return (
    <div className={styles.projectTentBlock}>
      <Title title="Votre projet" />
      <div className={styles.section}>
        <Input name="projectType" label="Type d’événement:" />

        <TextArea name="projectDescription" label="Description du projet:" />

        <Input name="guestsNumber" label="Nombre de personnes:" />

        <TextArea
          name="configuration"
          label="configuration souhaitée: 
(conférence, cérémonie, diner assis, diner debout, cocktail…)"
        />
      </div>
      <Title title="La tente" />
      <div className={styles.section}>
        <RadioGroup
          noWrap
          name="tentChoice"
          title="Le choix de la tente"
          values={[
            { value: "stretch" },
            { value: "silhouette" },
            { value: "ne-sais-pas", label: "Ne sais pas" },
          ]}
        />

        <Input
          name="paroisLaterales"
          label="Si silhouette, parois latérales?"
        />

        <RadioGroup
          name="subfloor"
          title="Plancher"
          values={[{ value: "oui" }, { value: "non" }]}
        />

        <RadioGroup
          name="climatiseur"
          title="Climatiseur"
          values={[{ value: "oui" }, { value: "non" }]}
        />
      </div>
    </div>
  );
};

export default ProjectTentBlock;
