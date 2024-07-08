"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./DevisForm.module.scss";
import Title from "./components/Title/Title";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import { fetchData } from "./DevisAPI";

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

  useEffect(() => {
    fetchData();
  }, []);

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
    console.log("Form data:", { ...values, file });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container}>
          <h2 className={styles.sectionTitle}>DEMANDE DE DEVIS</h2>
          <p className={styles.infoText}>
            Vous êtes intéressé par nos structures et souhaitez obtenir un devis
            personnalisé ? Remplissez le formulaire ci-dessous et nous vous
            contacterons dès que possible.
          </p>

          <Title title="Vous">
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

          <div className={styles.section}>
            <Title title="Votre projet" />

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

          <div className={styles.section}>
            <Title title="La tente" />

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

          <div className={styles.section}>
            <Title title="Info Pratiques" />
            <Input
              name="dates"
              label="Date de l’événement: (Date de début et de fin)"
            />
            <Input name="place" label="Lieu de l’événement:" />

            <div>
              <label htmlFor="file">Photos</label>
              <input
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
            Envoyer
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DevisForm;
