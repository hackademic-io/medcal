import { IAppointmentProps } from '@/types/appointment.interface';

export default function checkDisabledDates(appointments: IAppointmentProps[]) {
  const disabledDates = new Set();

  appointments.forEach(({ date }: { date: Date }) => {
    if (!disabledDates.has(date)) {
      const appointmentsForDate = appointments.filter(
        (appointment: IAppointmentProps) => appointment.date === date
      );

      const bookedTimesCount = appointmentsForDate.reduce(
        (count: number, appointment: IAppointmentProps) => {
          if (appointment.time) {
            return count + 1;
          }
          return count;
        },
        0
      );

      if (bookedTimesCount === 6) {
        disabledDates.add(date);
      }
    }
  });

  const uniqueDisabledDates = Array.from(disabledDates);

  return uniqueDisabledDates as string[];
}
