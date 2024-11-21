import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class EmailVerificationService {
  constructor(private mailer: MailService) {}
  async emailVerification(payload: any) {
    this.mailer.emailVerificationMail(payload);
  }
}
