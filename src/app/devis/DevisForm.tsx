"use client";

import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./DevisForm.module.scss";
import Sun from "@/assets/icons/sun.svg?react";

import { sendEmail } from "./DevisAPI";

import ThankYou from "./components/ThankYou/ThankYou";
import SideMenu from "@/components/structure/side-menu/SideMenu";
import PersonalInfoBlock from "./components/blocks/PersonalInfoBlock/PersonalInfoBlock";
import ProjectTentBlock from "./components/blocks/ProjectTentBlock/ProjectTentBlock";
import PracticalInfoBlock from "./components/blocks/PracticalInfoBlock/PracticalInfoBlock";
import ContactBlock from "./components/blocks/ContactBlock/ContactBlock";
import ButtonBlock from "./components/blocks/ButtonBlock/ButtonBlock";
import Image from "next/image";
import Logo from "@/assets/logos/logo-white.png";

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
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [files, setFiles] = useState<{ file: File; id: string }[]>([]);

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

  const handleSubmit = async (values: any) => {
    const payload = { ...values, files: files.map((file) => file.file) };

    try {
      await sendEmail(payload);
      setFormSubmitted(true); // Set formSubmitted to true upon successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <figure className={styles.figure}>
        <Image
          width={160}
          height={160}
          src={Logo}
          alt="logo"
          className={`${isFormSubmitted ? styles.thankYouLogo : ""} ${
            styles.logo
          }`}
        />
      </figure>
      <SideMenu type={isFormSubmitted ? "FERMER" : "back"} topView />

      <div
        className={`${isFormSubmitted ? styles.thankYouBox : ""} ${
          styles.formBox
        }`}
      >
        {isFormSubmitted ? (
          <ThankYou />
        ) : (
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.form}>
                  <div className={styles.phoneOnly}>
                    <PersonalInfoBlock />
                    <ProjectTentBlock />
                    <PracticalInfoBlock setFiles={setFiles} />
                    <ContactBlock />
                    <ButtonBlock isSubmitting={isSubmitting} />
                  </div>

                  <div className={styles.tabletLayout}>
                    <div className={styles.tabletColumns}>
                      <div className={styles.leftTabletCol}>
                        <PersonalInfoBlock />
                        <PracticalInfoBlock setFiles={setFiles} />
                      </div>

                      <div className={styles.rightTabletCol}>
                        <ProjectTentBlock />
                        <ContactBlock />
                      </div>
                    </div>
                    <ButtonBlock isSubmitting={isSubmitting} />
                  </div>

                  <div className={styles.desktopLayout}>
                    <div className={styles.columns}>
                      <PersonalInfoBlock />
                      <ProjectTentBlock />
                      <PracticalInfoBlock setFiles={setFiles} />
                    </div>

                    <div className={styles.desktopBottom}>
                      <ContactBlock />

                      <div className={styles.sunContainer}>
                        <Sun className={styles.sun} />
                      </div>

                      <ButtonBlock isSubmitting={isSubmitting} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </>
  );
};

export default DevisForm;
