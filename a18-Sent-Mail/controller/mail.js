// To send mail you have to used feck SMTP (simple mail transfer protocol)
// also you have to used nodemailer third party package to send mail

const nodemailer = require("nodemailer");

const sendMail = async (rea, res, next) => {
  let testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mekhi.simonis42@ethereal.email',
        pass: 'XncVpdmhXVwRDP42y4'
    }
});

const info = await transporter.sendMail({
    from: '"Vishal.shinde" <shindev05@gmail.co>', // sender address
    to: "vishalshinde00126@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

console.log(info.messageId)

  res.send(info);
};

module.exports = sendMail;
