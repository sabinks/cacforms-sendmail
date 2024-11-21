import { Module } from '@nestjs/common';
import { EmailVerificationService } from './email-verification.service';
import { EmailVerificationController } from './email-verification.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [EmailVerificationController],
  providers: [EmailVerificationService, MailService],
})
export class EmailVerificationModule {}
