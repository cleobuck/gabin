import axios from "axios";

export const sendEmail = async (values: any) => {
  const formData = new FormData();
  formData.append("clientType", values.clientType);
  formData.append("civilite", values.civilite);
  formData.append("name", values.name);
  formData.append("prenom", values.prenom);
  formData.append("telephone", values.telephone);
  formData.append("email", values.email);
  formData.append("profType", values.profType);
  formData.append("projectType", values.projectType);
  formData.append("projectDescription", values.projectDescription);
  formData.append("guestsNumber", values.guestsNumber);
  formData.append("configuration", values.configuration);
  formData.append("tentChoice", values.tentChoice);
  formData.append("paroisLaterales", values.paroisLaterales);
  formData.append("subfloor", values.subfloor);
  formData.append("climatiseur", values.climatiseur);
  formData.append("dates", values.dates);
  formData.append("place", values.place);
  formData.append("additionalInfo", values.additionalInfo);

  values.files.forEach((file: File) => {
    formData.append("attachments", file);
  });

  const response = await axios.post("/.netlify/functions/sendMail", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
};
