const nodemailer = require("nodemailer");
const smtpConfig = {
  service: "gmail",
  authj: {
    user: "andrew.test5858@gmail.com",
    pass: "Andrewsaed1234",
  },
};
const sendEmail = async (reciverEmail, text, from, sub) => {
  try {
    const trasnporter = await nodemailer.createTransport(smtpConfig);
    const mailOptions = {
      from: from,
      to: reciverEmail,
      subject: sub,
      text: text,
    };
    await trasnporter.sendMail(mailOptions);
  } catch (e) {
    console.log(e);
  }
};
module.exports = sendEmail;
