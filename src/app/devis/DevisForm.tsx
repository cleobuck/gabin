"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./DevisForm.module.scss";

const validationSchema = Yup.object({
  // Add validation for each field
  name: Yup.string().required("Champ requis"),
  prenom: Yup.string().required("Champ requis"),
  telephone: Yup.string().required("Champ requis"),
  email: Yup.string().email("Email invalide").required("Champ requis"),
  // Add validation for other fields as needed
});

const DevisForm = () => {
  const initialValues = {
    clientType: "",
    name: "",
    prenom: "",
    telephone: "",
    email: "",
    professionnel: "",
    projectType: "",
    projectDescription: "",
    guestsNumber: "",
    configuration: "",
    tentChoice: "",
    tentSubfloor: "",
    tentFloor: "",
    pignonWidth: "",
    heating: "",
    deliveryDate: "",
    deliveryLocation: "",
    photos: "",
    additionalInfo: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form data:", values);
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
          <div className={styles.section}>
            <h3 className={styles.sectionLabel}>Vous</h3>
            <Field as="select" name="clientType" className={styles.field}>
              <option value="">Sélectionnez</option>
              <option value="professionnel">Professionnel</option>
              <option value="particulier">Particulier</option>
            </Field>
          </div>
          <div className={styles.section}>
            <label className={styles.label}>Nom</label>
            <Field name="name" className={styles.field} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.label}>Prénom</label>
            <Field name="prenom" className={styles.field} />
            <ErrorMessage
              name="prenom"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.label}>Téléphone</label>
            <Field name="telephone" className={styles.field} />
            <ErrorMessage
              name="telephone"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.label}>Email</label>
            <Field name="email" type="email" className={styles.field} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionLabel}>Votre Projet</h3>
            <label className={styles.label}>Type d'événement</label>
            <Field name="projectType" className={styles.field} />
            <label className={styles.label}>Description du projet</label>
            <Field name="projectDescription" className={styles.field} />
            <label className={styles.label}>Nombre de personnes</label>
            <Field name="guestsNumber" className={styles.field} />
            <label className={styles.label}>Configuration souhaitée</label>
            <Field name="configuration" className={styles.field} />
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionLabel}>La Tente</h3>
            <label className={styles.label}>Le choix de la tente</label>
            <Field name="tentChoice" className={styles.field} />
            <label className={styles.label}>
              Si subfloor, préciser ladera?
            </label>
            <Field as="select" name="tentSubfloor" className={styles.field}>
              <option value="">Sélectionnez</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </Field>
            <label className={styles.label}>Plancher</label>
            <Field as="select" name="tentFloor" className={styles.field}>
              <option value="">Sélectionnez</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </Field>
            <label className={styles.label}>Fermeture des pignons</label>
            <Field as="select" name="pignonWidth" className={styles.field}>
              <option value="">Sélectionnez</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </Field>
            <label className={styles.label}>Chauffage</label>
            <Field as="select" name="heating" className={styles.field}>
              <option value="">Sélectionnez</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </Field>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionLabel}>Infos Pratiques</h3>
            <label className={styles.label}>Date de livraison</label>
            <Field name="deliveryDate" className={styles.field} />
            <label className={styles.label}>Lieu de livraison</label>
            <Field name="deliveryLocation" className={styles.field} />
            <label className={styles.label}>Photos</label>
            <Field name="photos" className={styles.field} />
            <label className={styles.label}>Infos complémentaires</label>
            <Field name="additionalInfo" className={styles.field} />
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
