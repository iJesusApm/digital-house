import dayjs from 'dayjs';
import 'dayjs/locale/es';

export const dateFormat = (date: string): string => {
  return dayjs(date).locale('es').format('DD [de] MMMM[,] YYYY');
};
