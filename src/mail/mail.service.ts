import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async contactFormSendAdmin(data: any) {
    const { email, name, phone, subject, message } = data;
    await this.mailerService
      .sendMail({
        to: process.env.ADMIN_EMAIL,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Contact Form Submission',
        template: './contact-form', // `.hbs` extension is appended automatically
        context: {
          // ✏️ filling curly brackets with content
          email,
          name,
          phone,
          subject,
          message,
        },
      })
      .catch((error) => console.log(error));
  }
  async forgotPasswordMail(data: any) {
    const { email, resetUrl, username } = data;

    await this.mailerService
      .sendMail({
        to: email,
        from: process.env.NO_REPLY,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Reset Password',
        template: './reset-password', // `.hbs` extension is appended automatically
        context: {
          // ✏️ filling curly brackets with content
          email,
          resetUrl,
          username,
          APP_NAME: process.env.APP_NAME,
          APP_DESCRIPTION: process.env.APP_DESCRIPTION,
        },
      })
      .catch((error) => console.log(error));
    console.log('Reset Password Mail Sent');
  }

  async emailVerificationMail(data: any) {
    const { email, verificationTokenUrl, name } = data;

    await this.mailerService
      .sendMail({
        to: email,
        from: process.env.NO_REPLY,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Email Verification',
        template: './email-verification', // `.hbs` extension is appended automatically
        context: {
          name,
          email,
          verificationTokenUrl,
          APP_NAME: process.env.APP_NAME,
          APP_DESCRIPTION: process.env.APP_DESCRIPTION,
        },
      })
      .catch((error) => console.log(error));
    console.log('Email Verification Mail Sent');
  }

  async shortcourseBooking(payload: any) {
    const { email, name, shortcourseBooking } = payload;

    await this.mailerService
      .sendMail({
        to: email,
        from: process.env.NO_REPLY,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Shortcouse Book Completed',
        template: './shortcourse-booking', // `.hbs` extension is appended automatically
        context: {
          // ✏️ filling curly brackets with content
          email,
          shortcourseBooking,
          name,
          APP_NAME: process.env.APP_NAME,
          APP_DESCRIPTION: process.env.APP_DESCRIPTION,
        },
      })
      .catch((error) => console.log(error));
    console.log('Shortcourse Booking Mail Sent');
  }
}
