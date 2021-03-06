// npm i nodemailer

let nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'danentregador97@gmail.com',
    pass: '1'
  }
});

let mailOptions = {
  from: 'danentregador97@gmail.com',
  to: 'dnlvaini@gmail.com',
  subject: 'enviei um email via node JS',
  text: 'Oláaaaaaaaaaaa'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error)
  }else {
    console.log('Email sent: ' + info.response);
  }
})