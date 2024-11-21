import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactFormSendMailModule } from './contact-form-send-mail/contact-form-send-mail.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { EmailVerificationModule } from './email-verification/email-verification.module';
import { ShortcourseBookingModule } from './shortcourse-booking/shortcourse-booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      isGlobal: true,
    }),
    ContactFormSendMailModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'mail/templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    MailModule,
    ContactFormSendMailModule,
    // ClientsModule.register([
    //   {
    //     name: 'MAIL_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [
    //         process.env.NODE_ENV == 'development'
    //           ? 'amqp://localhost:5672'
    //           : `${process.env.RBMQ_URL}`,
    //       ],
    //       queue: 'mail_queue',
    //       queueOptions: {
    //         durable: false,
    //       },
    //     },
    //   },
    // ]),
    ForgotPasswordModule,
    EmailVerificationModule,
    ShortcourseBookingModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
  exports: [MailService],
})
export class AppModule {}
