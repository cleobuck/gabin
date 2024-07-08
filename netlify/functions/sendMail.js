const sgMail = require("@sendgrid/mail");
const formidable = require("formidable");
const { Readable } = require("stream");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const form = new formidable.IncomingForm();

  const buffer = Buffer.from(event.body, "base64"); // Assuming the body is base64 encoded
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  // Mock request object
  const req = Object.assign(stream, {
    headers: event.headers,
    method: event.httpMethod,
    url: event.path,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to parse form data" }),
        });
        return;
      }

      // Access form fields
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
      } = fields;

      console.log(fields);

      console.log("client type is ", clientType[0]);

      // Handle attachment (if any)
      const attachmentFile = files.attachment;
      let attachment = null;
      if (attachmentFile) {
        const fs = require("fs");
        const path = require("path");
        const attachmentContent = fs.readFileSync(attachmentFile.path, {
          encoding: "base64",
        });
        attachment = {
          content: attachmentContent,
          filename: path.basename(attachmentFile.name),
          type: attachmentFile.type,
          disposition: "attachment",
        };
      }

      const msg = {
        to: "kaizenpixie@gmail.com", // Replace with your client's email
        from: "kaizenpixie@gmail.com", // Replace with your verified sender email
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
        attachments: attachment ? [attachment] : [],
      };

      sgMail
        .send(msg)
        .then(() => {
          resolve({
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          reject({
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email" }),
          });
        });
    });
  });
};
