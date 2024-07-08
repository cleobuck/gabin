const formidable = require("formidable");
const nodemailer = require("nodemailer");
const fs = require("fs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const form = new formidable.IncomingForm();
  form.encoding = "utf-8";
  form.keepExtensions = true;
  form.maxFileSize = 10 * 1024 * 1024; // 10 MB limit for uploaded files

  return new Promise((resolve, reject) => {
    // Create a readable stream from the event body
    const bufferStream = require("stream").Readable.from(event.body);

    // Parse the form data
    form.parse(bufferStream, async (err, fields, files) => {
      if (err) {
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to parse form data" }),
        });
      }

      try {
        // Set up your SMTP server credentials
        const transporter = nodemailer.createTransport({
          host: "smtp.your-email-provider.com", // e.g., 'smtp.gmail.com' for Gmail
          port: 465,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USERNAME,
          to: process.env.EMAIL_USERNAME, // Replace with your recipient email
          subject: "New Form Submission",
          text: `
            Client Type: ${fields.clientType}\n
            Civilité: ${fields.civilite}\n
            Name: ${fields.name}\n
            Prénom: ${fields.prenom}\n
            Téléphone: ${fields.telephone}\n
            Email: ${fields.email}\n
            Type Professionnel: ${fields.profType}\n
            Type d'événement: ${fields.projectType}\n
            Description du projet: ${fields.projectDescription}\n
            Nombre de personnes: ${fields.guestsNumber}\n
            Configuration souhaitée: ${fields.configuration}\n
            Choix de la tente: ${fields.tentChoice}\n
            Parois latérales: ${fields.paroisLaterales}\n
            Plancher: ${fields.subfloor}\n
            Climatiseur: ${fields.climatiseur}\n
            Dates: ${fields.dates}\n
            Lieu: ${fields.place}\n
            Infos complémentaires: ${fields.additionalInfo}
          `,
          attachments: files.attachment
            ? [
                {
                  filename: files.attachment.name,
                  path: files.attachment.path,
                  contentType: files.attachment.type,
                },
              ]
            : [],
        };

        console.log(mailOptions);

        await transporter.sendMail(mailOptions);

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
