// sendMail.js

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const {
    clientType,
    civilite,
    name,
    prenom,
    telephone,
    email,
    profType,
    projectType,
    projectDescription,
    guestsNumber,
    configuration,
    tentChoice,
    paroisLaterales,
    subfloor,
    climatiseur,
    dates,
    place,
    additionalInfo,
  } = JSON.parse(event.body);
  const attachment = event.body.attachment;

  const msg = {
    to: "cleo.buck@gmail.com", // Replace with your client's email
    from: "sender@example.com", // Replace with your verified sender email
    subject: "New Form Submission with Attachment",
    text: `
      Client Type: ${clientType}\n
      Civilité: ${civilite}\n
      Name: ${name}\n
      Prénom: ${prenom}\n
      Téléphone: ${telephone}\n
      Email: ${email}\n
      Type Professionnel: ${profType}\n
      Type d'événement: ${projectType}\n
      Description du projet: ${projectDescription}\n
      Nombre de personnes: ${guestsNumber}\n
      Configuration souhaitée: ${configuration}\n
      Choix de la tente: ${tentChoice}\n
      Parois latérales: ${paroisLaterales}\n
      Plancher: ${subfloor}\n
      Climatiseur: ${climatiseur}\n
      Dates: ${dates}\n
      Lieu: ${place}\n
      Infos complémentaires: ${additionalInfo}
    `,
    attachments: [
      {
        content: attachment,
        filename: "attachment.jpg", // Adjust filename as needed
        type: "image/jpeg", // Adjust MIME type as per your attachment
        disposition: "attachment",
      },
    ],
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "Email sent successfully!",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
