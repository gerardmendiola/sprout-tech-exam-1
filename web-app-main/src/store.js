// store.js
import { reactive } from 'vue'

export const store = reactive({
  attendanceItems: [
    {
      name: 'Aguas, Ivy',
      number: 1234,
      date: '03/16/2022',
      time: '01:34 PM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Mondragon, Sya',
      number: 5678,
      date: '03/16/2022',
      time: '03:48 AM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Penduko, Pedro',
      number: 9012,
      date: '03/16/2022',
      time: '04:02 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Powers, Amor',
      number: 7890,
      date: '03/16/2022',
      time: '12:01 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Bartolome, Kuma',
      number: 3456,
      date: '03/16/2022',
      time: '08:20 PM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Davis, Mara',
      number: 1230,
      date: '03/16/2022',
      time: '01:55 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Buenavista, Makati',
      number: 4567,
      date: '03/16/2022',
      time: '05:51 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Santos, Ninyo',
      number: 8901,
      date: '03/16/2022',
      time: '06:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Dimaguiba, Cardo',
      number: 2345,
      date: '03/16/2022',
      time: '12:23 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Del Valle, Clara',
      number: 4201,
      date: '03/16/2022',
      time: '10:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Maginoo, Ako',
      number: 8901,
      date: '03/16/2022',
      time: '06:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
  ],
  filter: {
    from: "",
    to: "",
    company: "Mcdollibee",
    department: "",
    location: "",
    employee: ""
  }
})