const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'diego.ono1505@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
};

const cancelSubscribe = (email, name) => {
  sgMail.send({
    to: email,
    from: 'diego.ono1505@gmail.com',
    subject: 'Why are you leaving us?',
    text: `Hello dear ${name}. Your account was removed, but we want know why is the reason for this to improve our services.`
  });
};

module.exports = {
  sendWelcomeEmail,
  cancelSubscribe
}