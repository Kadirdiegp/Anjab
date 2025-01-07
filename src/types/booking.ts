import { Timestamp } from 'firebase/firestore';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface Booking extends Omit<BookingData, 'date' | 'time'> {
  id: string;
  customerName: string;
  customerEmail: string;
  date: Timestamp;
  createdAt: Timestamp;
  status: BookingStatus;
}

export const bookingServices = [
  'Damen-Haarschnitt',
  'Herren-Haarschnitt',
  'Färben',
  'Strähnen',
  'Styling',
  'Hochsteckfrisur',
  'Waschen & Föhnen',
  'Bartpflege'
] as const;

export type BookingService = typeof bookingServices[number];
