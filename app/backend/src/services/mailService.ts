import * as nodemailer from "nodemailer";
import emailConfig from '../emailConfig'

class Mail {

  constructor(
      public to?: string,
      public subject?: string,
      public message?: string) { }

  async sendMail() {

    let mailOptions = {
      from: "no-reply@alissonDahlem.com",
      to: this.to,
      subject: this.subject,
      html: this.message
    };  

    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: 587,
      auth: {
          user: emailConfig.email,
          pass: emailConfig.password
      }
    });

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw error;
      } else {
          const error = new Error('deu certo')
          error.name = 'funco'
          error.message = 'E-mail enviado com sucesso!'
          throw error
      }
    });
  }


}

export default new Mail;