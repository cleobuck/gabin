const formidable = require("formidable");
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
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
    form.parse(event, async (err, fields, files) => {
      if (err) {
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to parse form data" }),
        });
      }

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

        const mailOptions = {
          from: "kaizenpixie@gmail.com",
          to: "kaizenpixie@gmail.com", // Replace with your recipient email
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

        await transporter.sendMail(mailOptions);

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
