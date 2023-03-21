const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "hamanovych.oleksii@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "hamanovych.oleksii@meta.ua" };

  transporter
    .sendMail(email)
    .then(() => console.log("Success"))
    .catch((error) => console.log(error.message));
};

module.exports = sendEmail;
