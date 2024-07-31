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

      const attachments = files.attachment
        ? Array.isArray(files.attachment)
          ? files.attachment
          : [files.attachment]
        : [];

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

        attachments: attachments.map((fileAttachment) => ({
          filename: fileAttachment.originalFilename,
          content: fs.createReadStream(fileAttachment.filepath),
          encoding: "base64",
        })),
      };

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

        // Clean up the temporary files after sending the email
        attachments.forEach((file) => {
          fs.unlink(file.filepath, (err) => {
            if (err) console.error("Failed to delete temporary file:", err);
          });
        });

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
