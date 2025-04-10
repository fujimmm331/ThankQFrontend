import dayjs from 'dayjs';

dayjs.locale('ja')

export const myDayJs = {
  now() {
    return dayjs()
  },
  format(date: ReturnType<typeof dayjs> , format: string = 'YYYY/MM/DD') {
    return date.format(format);
  }
}
