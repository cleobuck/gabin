const formidable = require("formidable");
const { Readable } = require("stream");

const nodemailer = require("nodemailer");
const fs = require("fs");

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
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to parse form data" }),
        });
        return;
      }

      let imageAttachment = "";

      if (files.attachement[0]) {
        imageAttachment = await readFileAsync(files.attachment[0].filepath);
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
      } = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value[0]])
      );

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
        attachments: files.attachment
          ? [
              {
                filename: files.attachment[0].originalFilename,
                content: imageAttachment,
                encoding: "base64",
              },
            ]
          : [],
      };

      console.log("message data is ", msg);

      try {
        // Set up your SMTP server credentials
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", // e.g., 'smtp.gmail.com' for Gmail
          port: 587,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        await transporter.sendMail(msg);

        // Clean up the temporary file after sending the email
        if (files.attachment) {
          fs.unlink(files.attachment.path, (err) => {
            if (err) console.error("Failed to delete temporary file:", err);
          });
        }

        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: "Email sent successfully" }),
        });
      } catch (error) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to send email" }),
        });
      }
    });
  });
};
