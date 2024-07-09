"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./DevisForm.module.scss";
import Title from "./components/Title/Title";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import { sendEmail } from "./DevisAPI";
import Sun from "@/assets/images/sun.svg?react";

const validationSchema = Yup.object().shape({
  clientType: Yup.string().required("Sélectionnez le type de client"),
  civilite: Yup.string().required("Sélectionnez la civilité"),
  name: Yup.string().required("Nom requis"),
  prenom: Yup.string().required("Prénom requis"),
  telephone: Yup.string().required("Numéro de téléphone requis"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  profType: Yup.string().when("clientType", ([clientType], schema) => {
    if (clientType === "professionnel") {
      return schema.required("Sélectionnez le type professionnel");
    } else {
      return schema;
    }
  }),
  projectType: Yup.string().required("Type d'événement requis"),
  projectDescription: Yup.string().required("Description du projet requise"),
  guestsNumber: Yup.number()
    .required("Nombre de personnes requis")
    .positive("Le nombre doit être positif"),
  configuration: Yup.string().required("Configuration souhaitée requise"),
  tentChoice: Yup.string().required("Choix de la tente requis"),
  paroisLaterales: Yup.string().when("tentChoice", ([tentChoice], schema) => {
    if (tentChoice === "silhouette") {
      return schema.required("Précisez les parois latérales");
    } else {
      return schema;
    }
  }),
  subfloor: Yup.string().required("Sélectionnez l'option de plancher"),
  climatiseur: Yup.string().required("Sélectionnez l'option de climatisation"),
  dates: Yup.string().required("Date de l'événement requise"),
  place: Yup.string().required("Lieu de l'événement requis"),

  additionalInfo: Yup.string(),
});

const DevisForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const initialValues = {
    clientType: "",
    civilite: "",
    name: "",
    prenom: "",
    telephone: "",
    email: "",
    profType: "",
    projectType: "",
    projectDescription: "",
    guestsNumber: "",
    configuration: "",
    tentChoice: "",
    paroisLaterales: "", // Only relevant if tentChoice is "silhouette"
    subfloor: "",
    climatiseur: "",
    dates: "",
    place: "",
    additionalInfo: "",
  };

  const handleSubmit = (values: any) => {
    sendEmail({ ...values, file });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container}>
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

            <Input name="name" label="nom" />
            <Input name="prenom" label="prénom" />
            <Input name="telephone" label="Téléphone" />
            <Input name="email" label="Email" />

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
          <Title title="Votre projet" />
          <div className={styles.section}>
            <Input name="projectType" label="Type d’événement:" />

            <TextArea
              name="projectDescription"
              label="Description du projet:"
            />

            <Input name="guestsNumber" label="Nombre de personnes :" />

            <TextArea
              name="configuration"
              label="configuration souhaitée: 
(conférence, cérémonie, diner assis, diner debout, cocktail…)"
            />
          </div>
          <Title title="La tente" />
          <div className={styles.section}>
            <RadioGroup
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
              label="Si silhouette, parois latérales ?"
            />

            <RadioGroup
              name="subfloor"
              title="Plancher"
              values={[{ value: "oui" }, { value: "non" }]}
            />

            <RadioGroup
              name="climatiseur"
              title="climatiseur"
              values={[{ value: "oui" }, { value: "non" }]}
            />
          </div>
          <Title title="Info Pratiques" />

          <div className={styles.section}>
            <Input
              name="dates"
              label="Date de l’événement: (Date de début et de fin)"
            />
            <Input name="place" label="Lieu de l’événement:" />

            <div className={styles.files}>
              <label htmlFor="file">Photos</label>
              <input type="file" />

              <label htmlFor="file-upload" className={styles.uploadButton}>
                Choisir un fichier
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(event) => {
                  if (event.currentTarget.files) {
                    setFile(event.currentTarget.files[0]);
                  }
                }}
              />
            </div>
            <TextArea name="additionalInfo" label="Infos complémentaires:" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            <span className={styles.sunContainer}>
              <Sun className={styles.sun} />
            </span>
            <span className={styles.title}> ENVOYER</span>
            <span className={styles.sunContainer}>
              <Sun className={styles.sun} />
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DevisForm;
