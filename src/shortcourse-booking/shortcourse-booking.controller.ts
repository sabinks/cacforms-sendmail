import { Controller } from '@nestjs/common';
import { ShortcourseBookingService } from './shortcourse-booking.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('shortcourse-booking')
export class ShortcourseBookingController {
  constructor(
    private readonly shortcourseBookingService: ShortcourseBookingService,
  ) {}
  @EventPattern('shortcourse-booking-booked')
  handleEmailVerification(payload: any) {
    this.shortcourseBookingService.shortcourseBooking(payload);
  }
}
